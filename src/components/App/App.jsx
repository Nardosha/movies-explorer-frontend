import "./App.css";
import { Header } from "../Header/Header";
import { Route, Routes, useLocation } from "react-router-dom";
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
  const location = useLocation();
  const [isShowSavedMovies, setIsShowSavedMovies] = useState(false);
  const validRoutes = ["/movies", "saved-movies", "/me", "/main"];
  const isShowSignComponents = validRoutes.includes(location.pathname);

  console.log(Routes);

  useEffect(() => {
    if (isShowSavedMovies) {
      console.log(isShowSavedMovies);
      setMovies(movies.filter((movie) => movie.isSaved));
    }
  }, [isShowSavedMovies]);

  return (
    <div className="app">
      {isShowSignComponents && <Header isLogged={isLogged} />}

      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/movies" element={<Movies movies={movies} />} />
        <Route
          path="/saved-movies"
          element={<SavedMovies movies={movies} showSavedMovies={true} />}
        />
        <Route path="/me" element={<Profile />} />
        <Route path="/main" element={<Main />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>

      {isShowSignComponents && <Footer />}
    </div>
  );
}

export default App;
