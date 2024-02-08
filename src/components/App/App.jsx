import "./App.css";
import { Header } from "../Header/Header";
import { Route, Routes } from "react-router-dom";
import { NotFoundPage } from "../NotFoundPage/NotFoundPage";
import { Main } from "../Main/Main";
import { useEffect, useRef, useState } from "react";
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
  getFromLocalStorage,
  setToLocalStorage,
} from "../../helpers/localStorage.helper";
import { LocalStorageKeys } from "../../constants/movies";
import { getMovies } from "../../hooks/useMoviesApi";
import { useLocationHook } from "../../hooks/useLocationHook";
import { filterMovies } from "../../helpers/movie.helper";

function App() {
  const isLogged = useRef(true);
  const screenWidth = UseWindowSize();
  const loaderConfig = UseLoaderConfig(screenWidth);
  const [initialMovies, setInitialMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isShowHeader, isShowFooter } = useLocationHook();
  const [search, setSearch] = useState("");
  const [isToggled, setIsToggled] = useState(false);

  const onSearch = (newSearch) => {
    console.log("onSearch", newSearch);
    setSearch(newSearch);
    setToLocalStorage(LocalStorageKeys.SEARCH, newSearch);
    setFilteredMovies(filterMovies(initialMovies, { search, isToggled }));
  };

  const onSwitcherToggle = (newValue) => {
    setIsToggled(newValue);

    setToLocalStorage(LocalStorageKeys.IS_SHOW_SHORT_MOVIES, newValue);

    setFilteredMovies(
      filterMovies(initialMovies, { search, setIsToggled: newValue }),
    );
  };

  const onShowMore = () => {};

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

  useEffect(() => {
    if (!initialMovies.length) return;

    const filteredMovies = filterMovies(initialMovies, {
      search,
      isToggled,
    });

    setFilteredMovies([...filteredMovies]);
  }, [initialMovies]);

  useEffect(() => {
    setFiltersFromLocalStorage();

    getMovies()
      .then((movies) => {
        setInitialMovies(movies);
        return filterMovies(movies, { search, isToggled });
      })
      .then((filteredMovies) => setFilteredMovies([...filteredMovies]));
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
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

          <Route
            path="/movies"
            element={
              <ProtectedRoute
                element={Movies}
                isLogged={isLogged}
                movies={filteredMovies}
                loaderConfig={loaderConfig}
                onShowMore={onShowMore}
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
            element={<ProtectedRoute element={Profile} />}
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
