import "./App.css";
import { Header } from "../Header/Header";
import { Route, Routes, useLocation } from "react-router-dom";
import { NotFoundPage } from "../NotFoundPage/NotFoundPage";
import { Main } from "../Main/Main";
import { useEffect, useRef, useState } from "react";
import { Movies } from "../Movies/Movies";
import { SavedMovies } from "../SavedMovies/SavedMovies";
import { Profile } from "../Profile/Profile";
import { MOVIES } from "../Movies/MoviesCard/MovieCard.helper";
import { SignIn } from "../SignIn/SignIn";
import { SignUp } from "../SignUp/SignUp";
import { Footer } from "../Footer/Footer";
import { ProtectedRoute } from "../ProtectedRoute/ProtectedRoute";
import { UserContext } from "../../contexts/UserContext";
import { UseWindowSize } from "../../utils/UseWindowSize";
import { UseLoaderConfig } from "../../utils/UseLoaderConfig";

function App() {
  const isLogged = useRef(true);
  const screenWidth = UseWindowSize();
  const loaderConfig = UseLoaderConfig(screenWidth);

  const [movies, setMovies] = useState(MOVIES);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const [isShowSavedMovies, setIsShowSavedMovies] = useState(false);
  const validRoutesForHeader = ["/movies", "/saved-movies", "/profile", "/"];
  const validRoutesForFooter = ["/movies", "/saved-movies", "/"];
  const isShowHeader = validRoutesForHeader.includes(location.pathname);
  const isShowFooter = validRoutesForFooter.includes(location.pathname);

  console.log(Routes);

  useEffect(() => {
    if (isShowSavedMovies) {
      setMovies(movies.filter((movie) => movie.isSaved));
    }
  }, [isShowSavedMovies]);

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
              />
            }
                // filters={filters}
                // onFiltersChanged={onFiltersChanged}
          />

          <Route
            path="/saved-movies"
            element={
              <ProtectedRoute
                element={SavedMovies}
                movies={movies}
                showSavedMovies={true}
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
