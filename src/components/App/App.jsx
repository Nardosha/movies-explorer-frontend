import "./App.css";
import { Header } from "../Header/Header";
import { Route, Routes } from "react-router-dom";
import { NotFoundPage } from "../NotFoundPage/NotFoundPage";
import { Main } from "../Main/Main";
import { Footer } from "../Footer/Footer";
import { useEffect, useRef, useState } from "react";
import { Movies } from "../Movies/Movies";
import { SavedMovies } from "../SavedMovies/SavedMovies";
import { Profile } from "../Profile/Profile";
import { MOVIES } from "../Movies/MoviesCard/MovieCard.helper";
import { SignIn } from "../SignIn/SignIn";
import { SignUp } from "../SignUp/SignUp";

function App() {
  const isLogged = useRef(false);

  const [movies, setMovies] = useState(MOVIES);
  const [isShowSavedMovies, setIsShowSavedMovies] = useState(false);

  useEffect(() => {
    if (isShowSavedMovies) {
      console.log(isShowSavedMovies);
      setMovies(movies.filter((movie) => movie.isSaved));
    }
  }, [isShowSavedMovies]);
  console.log(movies);

  return (
    <div className="app">
      {isLogged.current && <Header isLogged={isLogged} />}

      <Routes>
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="/movies" element={<Movies movies={movies} />} />
        <Route
          path="/saved-movies"
          element={<SavedMovies movies={movies} showSavedMovies={true} />}
        />
        <Route path="/me" target="_black" element={<Profile />} />
        <Route path="/" element={<Main />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
      {isLogged.current && <Footer />}
    </div>
  );
}

export default App;
