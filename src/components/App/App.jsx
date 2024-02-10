import "./App.css";
import { Header } from "../Header/Header";
import { Route, Routes, useNavigate } from "react-router-dom";
import { NotFoundPage } from "../NotFoundPage/NotFoundPage";
import { Main } from "../Main/Main";
import { useEffect, useState } from "react";
import { Movies } from "../Movies/Movies";
import { SavedMovies } from "../SavedMovies/SavedMovies";
import { Profile } from "../Profile/Profile";
import { SignIn } from "../SignIn/SignIn";
import { SignUp } from "../SignUp/SignUp";
import { Footer } from "../Footer/Footer";
import { ProtectedRoute } from "../ProtectedRoute/ProtectedRoute";
import { UserContext } from "../../contexts/UserContext";
import { UseWindowSize } from "../../utils/UseWindowSize";
import { UseLoaderConfig } from "../../utils/UseLoaderConfig";
import {
  clearLocalStorage,
  getFromLocalStorage,
  setToLocalStorage,
} from "../../helpers/localStorage.helper";
import { LocalStorageKeys } from "../../constants/movies";
import { useLocationHook } from "../../hooks/useLocationHook";
import { filterMovies } from "../../helpers/movie.helper";
import { getMovies } from "../../hooks/useMoviesLoader";
import { getUserInfo, signIn, signOut, signup } from "../../utils/MainApi";

function App() {
  const navigate = useNavigate();
  const [isLogged, setIsLogged] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [savedMovies, setSavedMovies] = useState([]);

  const [initialMovies, setInitialMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [isToggled, setIsToggled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const screenWidth = UseWindowSize();
  const loaderConfig = UseLoaderConfig(screenWidth);
  const { isShowHeader, isShowFooter } = useLocationHook();

  const onSearch = (newSearch) => {
    console.log("onSearch", newSearch);
    setSearch(newSearch);
    setToLocalStorage(LocalStorageKeys.SEARCH, newSearch);
    setFilteredMovies([
      ...filterMovies(initialMovies, { search: newSearch, isToggled }),
    ]);
  };

  const onSwitcherToggle = (newValue) => {
    setIsToggled(newValue);

    setToLocalStorage(LocalStorageKeys.IS_SHOW_SHORT_MOVIES, newValue);

    setFilteredMovies([
      ...filterMovies(initialMovies, { search, setIsToggled: newValue }),
    ]);
  };

  const handleLoadMovies = () => {
    getMovies(loaderConfig)
      .then((movies) => {
        setInitialMovies(movies);
        return filterMovies(movies, { search, isToggled });
      })
      .then((filteredMovies) => {
        // if (!search) return;

        setFilteredMovies([...filteredMovies]);
      });
  };

  const setFiltersFromLocalStorage = () => {
    const prevSearch = getFromLocalStorage(LocalStorageKeys.SEARCH);
    const prevSwitcherState = getFromLocalStorage(
      LocalStorageKeys.IS_SHOW_SHORT_MOVIES,
    );

    if (prevSearch) {
      setSearch(prevSearch);
    }

    setIsToggled(prevSwitcherState);
  };

  const handleSignUp = async ({ name, email, password }) => {
    console.log("handleSignUp", { name, email, password });
    setIsLoading(true);

    try {
      const newUser = await signup({ name, email, password });

      if (!newUser) return;

      const user = signIn({ email, password });

      setCurrentUser(user);
      setIsLogged(true);
      navigate("/movies", { replace: true });
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignOut = async () => {
    console.log("handleSignOut");
    setIsLoading(true);

    try {
      await signOut();
      setIsLogged(false);
      setCurrentUser(null);
      setSavedMovies([]);
      clearLocalStorage();
      navigate("/signin", { replace: true });
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleTokenCheck = async () => {
    console.log("handleTokenCheck");
    setIsLoading(true);

    try {
      const { data } = await getUserInfo();
      console.log(data);
      setIsLogged(true);
      setCurrentUser(data);
      navigate("/", { replace: true });
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignIn = async ({ email, password }) => {
    setIsLoading(true);
    console.log("handleSignIn");
    try {
      const { data } = await signIn({ email, password });
      console.log(data);

      setIsLogged(true);
      navigate("/", { replace: true });
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!initialMovies.length) return;

    const filteredMovies = filterMovies(initialMovies, {
      search,
      isToggled,
    });

    setFilteredMovies([...filteredMovies]);
  }, [initialMovies]);

  useEffect(() => {
    if (search.length) {
      filterMovies(initialMovies, { search, isToggled });
    }
  }, [search]);

  // ПЕРВАЯ ЗАГРУЗКА
  useEffect(() => {
    console.log(" ПЕРВАЯ ЗАГРУЗКА");
    setFiltersFromLocalStorage();
    (async () => handleTokenCheck())();
    handleLoadMovies();
  }, []);

  return (
    <UserContext.Provider value={{ isLogged }}>
      <div className={isMenuOpen ? "app app_menu-active" : "app"}>
        {isShowHeader && (
          <Header
            isLogged={isLogged}
            isMenuOpen={isMenuOpen}
            onMenuToggle={setIsMenuOpen}
          />
        )}

        <Routes>
          <Route path="/signin" element={<SignIn onSubmit={handleSignIn} />} />
          <Route path="/signup" element={<SignUp onSubmit={handleSignUp} />} />

          <Route
            path="/movies"
            element={
              <ProtectedRoute
                element={Movies}
                isLogged={isLogged}
                movies={filteredMovies}
                loaderConfig={loaderConfig}
                search={search}
                toggled={isToggled}
                onSearch={onSearch}
                onToggle={onSwitcherToggle}
              />
            }
          />

          <Route
            path="/saved-movies"
            element={
              <ProtectedRoute
                element={SavedMovies}
                movies={filteredMovies}
                showSavedMovies={true}
                search={search}
                toggled={isToggled}
                onSearch={onSearch}
                onToggle={onSwitcherToggle}
              />
            }
          />

          <Route
            path="/profile"
            element={
              <ProtectedRoute element={Profile} onSignOut={handleSignOut} />
            }
          />

          <Route path="/" element={<Main />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>

        {isShowFooter && <Footer />}
      </div>
    </UserContext.Provider>
  );
}

export default App;
