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

function App() {
  const isLogged = useRef(true);
  const [movies, setMovies] = useState(MOVIES);
  const location = useLocation();
  const [isShowSavedMovies, setIsShowSavedMovies] = useState(false);
  const validRoutesForHeader = ["/movies", "/saved-movies", "/me", "/"];
  const validRoutesForFooter = ["/movies", "/saved-movies", "/"];
  const isShowHeader = validRoutesForHeader.includes(location.pathname);
  const isShowFooter = validRoutesForFooter.includes(location.pathname);

  console.log(Routes);

  useEffect(() => {
    if (isShowSavedMovies) {
      console.log(isShowSavedMovies);
      setMovies(movies.filter((movie) => movie.isSaved));
    }
  }, [isShowSavedMovies]);

  return (
    <div className="app">
      {isShowHeader && <Header isLogged={isLogged} />}

      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/movies" element={<Movies movies={movies} />} />
        <Route
          path="/saved-movies"
          element={<SavedMovies movies={movies} showSavedMovies={true} />}
        />
        <Route path="/me" element={<Profile />} />
        <Route path="/" element={<Main />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>

      {isShowFooter && <Footer />}
    </div>
  );
}

export default App;
