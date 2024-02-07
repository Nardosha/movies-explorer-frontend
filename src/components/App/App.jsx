import "./App.css";
import { Header } from "../Header/Header";
import { Route, Routes, useLocation } from "react-router-dom";
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
import { LocalStorageKeys } from "../../utils/constants";
import {
  getFromLocalStorage,
  setToLocalStorage,
} from "../../helpers/localStorage.helper";

function App() {
  const isLogged = useRef(true);
  const screenWidth = UseWindowSize();
  const loaderConfig = UseLoaderConfig(screenWidth);
  const [movies, setMovies] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const [isShowSavedMovies, setIsShowSavedMovies] = useState(false);
  const validRoutesForHeader = ["/movies", "/saved-movies", "/profile", "/"];
  const validRoutesForFooter = ["/movies", "/saved-movies", "/"];
  const isShowHeader = validRoutesForHeader.includes(location.pathname);
  const isShowFooter = validRoutesForFooter.includes(location.pathname);
  const [search, setSearch] = useState("");
  const [isShowShortMovies, setIsShowShortMovies] = useState(false);

  const onSearch = (newSearch) => {
    setSearch(newSearch);
    setToLocalStorage(LocalStorageKeys.SEARCH, newSearch);
  };

  const onSwitcherToggle = (newValue) => {
    setIsShowShortMovies(newValue);
    setToLocalStorage(LocalStorageKeys.IS_SHOW_SHORT_MOVIES, newValue);
  };

  const onShowMore = () => {};

  useEffect(() => {
    if (isShowSavedMovies) {
      setMovies(movies.filter((movie) => movie.isSaved));
    }
  }, [isShowSavedMovies]);

  useEffect(() => {
    const prevSearch = getFromLocalStorage(LocalStorageKeys.SEARCH);
    const prevSwitcherState = getFromLocalStorage(
      LocalStorageKeys.IS_SHOW_SHORT_MOVIES,
    );

    if (prevSearch) {
      setSearch(prevSearch);
    }

    if (prevSwitcherState) {
      setToLocalStorage(prevSwitcherState);
    }
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
                movies={movies}
                loaderConfig={loaderConfig}
                onShowMore={onShowMore}
                search={search}
                toggled={isShowShortMovies}
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
                movies={movies}
                showSavedMovies={true}
                search={search}
                toggled={isShowShortMovies}
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
