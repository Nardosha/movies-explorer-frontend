import "./App.css";
import { Header } from "../Header/Header";
import { Route, Routes, useNavigate } from "react-router-dom";
import { NotFoundPage } from "../NotFoundPage/NotFoundPage";
import { Main } from "../Main/Main";
import { useCallback, useEffect, useState } from "react";
import { Movies } from "../Movies/Movies";
import { SavedMovies } from "../SavedMovies/SavedMovies";
import { Profile } from "../Profile/Profile";
import { SignIn } from "../SignIn/SignIn";
import { SignUp } from "../SignUp/SignUp";
import { Footer } from "../Footer/Footer";
import { ProtectedRoute } from "../ProtectedRoute/ProtectedRoute";
import { UserContext } from "../../contexts/UserContext";
import { UseWindowSize } from "../../hooks/UseWindowSize";
import { UseLoaderConfig } from "../../hooks/UseLoaderConfig";
import {
  clearLocalStorage,
  getFromLocalStorage,
  setToLocalStorage,
} from "../../helpers/localStorage.helper";
import { LocalStorageKeys } from "../../constants/movies";
import { useLocationHook } from "../../hooks/useLocationHook";
import { filterMovies } from "../../helpers/movie.helper";
import { getMovies } from "../../hooks/useMoviesLoader";
import {
  loadSavedMovies,
  getUserInfo,
  saveMovie,
  signIn,
  signOut,
  signup,
  deleteMovie,
  updateUserInfo,
} from "../../utils/MainApi";

function App() {
  const navigate = useNavigate();

  const [isLogged, setIsLogged] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [savedMovies, setSavedMovies] = useState([]);
  const [filteredSavedMovies, setFilteredSavedMovies] = useState([]);
  const [preloaderTimeout, setPreloaderTimeout] = useState(null);
  const [initialMovies, setInitialMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [search, setSearch] = useState("");
  const [savedMoviesSearch, setSavedMoviesSearch] = useState("");
  const [isToggled, setIsToggled] = useState(false);
  const [isSavedMoviesToggled, setIsSavedMoviesToggled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const screenWidth = UseWindowSize();
  const { deviceType, loaderConfig } = UseLoaderConfig(screenWidth);
  const { isShowHeader, isShowFooter } = useLocationHook();

  const handleOpenMenu = (value) => {
    if (deviceType === "LAPTOP") return;

    setIsMenuOpen(value);
  };

  const onSearch = (newSearch, key) => {
    console.log("onSearch", newSearch);
    setIsLoading(true);
    setToLocalStorage(key, newSearch);

    if (key === LocalStorageKeys.SEARCH.MOVIES) {
      setSearch(newSearch);

      const filteredMovies = filterMovies(initialMovies, {
        search: newSearch,
        isToggled,
      });

      setToLocalStorage(LocalStorageKeys.LOADED_MOVIES, filteredMovies);
      setFilteredMovies([...filteredMovies]);
    }

    if (key === LocalStorageKeys.SEARCH.SAVED_MOVIES) {
      setSavedMoviesSearch(newSearch);
      const filteredSavedMovies = filterMovies(savedMovies, {
        search: newSearch,
        isToggled: isSavedMoviesToggled,
      });
      setFilteredSavedMovies([...filteredSavedMovies]);
    }

    hidePreloader();
  };

  const onSwitcherToggle = (newValue, key) => {
    console.log("onSwitcherToggle", newValue, key);
    setToLocalStorage(key, newValue);

    if (key === LocalStorageKeys.TOGGLE.IS_SHOW_SHORT_MOVIES) {
      console.log(99999);
      setIsToggled(newValue);

      setFilteredMovies([
        ...filterMovies(initialMovies, { search, isToggled: newValue }),
      ]);

      return;
    }

    if (key === LocalStorageKeys.TOGGLE.IS_SHOW_SHORT_SAVED_MOVIES) {
      setIsSavedMoviesToggled(newValue);

      setFilteredSavedMovies([
        ...filterMovies(savedMovies, {
          search: savedMoviesSearch,
          isToggled: newValue,
        }),
      ]);
    }
  };

  const handleLoadMovies = useCallback(async () => {
    console.log("handleLoadMovies");
    setIsLoading(true);
    try {
      const movies = await getMovies(loaderConfig);

      setInitialMovies([...movies]);
      const filteredMovies = filterMovies(movies, { search, isToggled });

      if (!search.length) return;

      setFilteredMovies([...filteredMovies]);
    } catch (err) {
      console.log(err);
    } finally {
      hidePreloader();
    }
  }, []);

  const restoreDataFromLocalStorage = () => {
    const prevMoviesSearch = getFromLocalStorage(
      LocalStorageKeys.SEARCH.MOVIES,
    );
    const prevSavedMoviesSearch = getFromLocalStorage(
      LocalStorageKeys.SEARCH.SAVED_MOVIES,
    );
    const prevMoviesSwitcherState = !!getFromLocalStorage(
      LocalStorageKeys.TOGGLE.IS_SHOW_SHORT_MOVIES,
    );

    const prevSavedMoviesSwitcherState = !!getFromLocalStorage(
      LocalStorageKeys.TOGGLE.IS_SHOW_SHORT_SAVED_MOVIES,
    );

    const prevLoadedMovies = getFromLocalStorage(
      LocalStorageKeys.LOADED_MOVIES,
    );

    prevMoviesSearch?.length && setSearch(prevMoviesSearch);

    prevSavedMoviesSearch?.length &&
      setSavedMoviesSearch(prevSavedMoviesSearch);

    setIsToggled(prevMoviesSwitcherState);
    setIsSavedMoviesToggled(prevSavedMoviesSwitcherState);

    if (prevMoviesSearch?.length && prevLoadedMovies?.length) {
      setFilteredMovies([
        ...filterMovies(prevLoadedMovies, {
          prevMoviesSearch,
          prevMoviesSwitcherState,
        }),
      ]);
    }

    console.log(888, prevSavedMoviesSearch);
    if (prevSavedMoviesSearch?.length) {
      setFilteredSavedMovies([
        ...filterMovies(savedMovies, {
          search: prevSavedMoviesSearch,
          isToggled: prevSavedMoviesSwitcherState,
        }),
      ]);
    }
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
      hidePreloader();
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
      hidePreloader();
    }
  };

  const handleTokenCheck = useCallback(async () => {
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
      hidePreloader();
    }
  }, []);

  const handleSignIn = async ({ email, password }) => {
    setIsLoading(true);
    console.log("handleSignIn");
    try {
      const { data: user } = await signIn({ email, password });

      setCurrentUser({ ...user });
      setIsLogged(true);
      navigate("/", { replace: true });
    } catch (err) {
      console.log(err);
    } finally {
      hidePreloader();
    }
  };

  const handleUpdateUserInfo = async ({ name, email }) => {
    setIsLoading(true);
    console.log("handleUpdateUserInfo", { name, email });
    try {
      const { data: user } = await updateUserInfo({ name, email });

      console.log(user);
      setCurrentUser({ ...user });
    } catch (err) {
      console.log(err);
    } finally {
      hidePreloader();
    }
  };

  const loadUserMovies = useCallback(async () => {
    console.log("getUserMovies", initialMovies);

    try {
      const { data: userSavedMovies } = await loadSavedMovies();
      console.log("userSavedMovies", userSavedMovies);
      if (!userSavedMovies) return;

      setSavedMovies([...userSavedMovies]);
    } catch (err) {
      console.log(err);
    }
  }, []);

  const handleSaveMovie = async (data) => {
    console.log("handleSaveMovie", data);
    try {
      const { data: movie } = await saveMovie(data);

      if (!movie) return;

      await loadUserMovies();
    } catch (err) {
      console.log(err);
    }
  };

  const handleDeleteMovie = async (movie) => {
    console.log("handleDeleteMovie", movie, savedMovies);
    try {
      const deletedMovie = savedMovies.find(
        (savedMovie) => savedMovie.movieId === movie.movieId,
      );

      if (!deletedMovie) return;

      const { data } = await deleteMovie(deletedMovie._id);

      if (!data) return;

      await loadUserMovies();
    } catch (err) {
      console.log(err);
    }
  };

  const hidePreloader = () => {
    if (preloaderTimeout) {
      clearTimeout(preloaderTimeout);
    }

    setPreloaderTimeout(
      setTimeout(() => {
        setIsLoading(false);
      }, 0),
    );
  };

  useEffect(() => {
    console.log(screenWidth);
  }, [screenWidth]);

  useEffect(() => {
    (async () => {
      if (!isLogged) return;

      await loadUserMovies();
    })();
  }, [isLogged, loadUserMovies]);

  useEffect(() => {
    if (!initialMovies?.length || !search?.length) return;

    const filteredMovies = filterMovies(initialMovies, {
      search,
      isToggled,
    });

    setFilteredMovies([...filteredMovies]);
  }, [initialMovies]);

  useEffect(() => {
    console.log("APP. USE EFFECT: IS LOADING", isLoading);
  }, [isLoading]);

  useEffect(() => {
    setIsLoading(true);

    if (!search.length) return;

    setFilteredMovies([...filterMovies(initialMovies, { search, isToggled })]);

    hidePreloader();
  }, [search, isToggled]);

  useEffect(() => {
    setFilteredSavedMovies([
      ...filterMovies(savedMovies, {
        search: savedMoviesSearch,
        isToggled: isSavedMoviesToggled,
      }),
    ]);
  }, [savedMovies]);

  useEffect(() => {
    setFilteredSavedMovies([
      ...filterMovies(savedMovies, {
        search: savedMoviesSearch,
        isToggled: isSavedMoviesToggled,
      }),
    ]);
  }, [savedMoviesSearch, isSavedMoviesToggled]);

  // ПЕРВАЯ ЗАГРУЗКА
  useEffect(() => {
    console.log(" ПЕРВАЯ ЗАГРУЗКА");

    restoreDataFromLocalStorage();

    (async () => handleTokenCheck())();
    (async () => handleLoadMovies())();
  }, []);

  return (
    <UserContext.Provider value={{ isLogged, currentUser }}>
      <div className={isMenuOpen ? "app app_menu-active" : "app"}>
        {isShowHeader && (
          <Header
            isLogged={isLogged}
            isMenuOpen={isMenuOpen}
            onMenuToggle={handleOpenMenu}
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
                savedMovies={savedMovies}
                loaderConfig={loaderConfig}
                search={search}
                toggled={isToggled}
                isLoading={isLoading}
                onSearch={onSearch}
                onToggle={onSwitcherToggle}
                onSaveMovie={handleSaveMovie}
              />
            }
          />

          <Route
            path="/saved-movies"
            element={
              <ProtectedRoute
                element={SavedMovies}
                movies={filteredSavedMovies}
                showSavedMovies={true}
                search={savedMoviesSearch}
                toggled={isSavedMoviesToggled}
                isLoading={isLoading}
                onSearch={onSearch}
                onToggle={onSwitcherToggle}
                onDeleteMovie={handleDeleteMovie}
              />
            }
          />

          <Route
            path="/profile"
            element={
              <ProtectedRoute
                element={Profile}
                onSignOut={handleSignOut}
                onUpdateUser={handleUpdateUserInfo}
              />
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
