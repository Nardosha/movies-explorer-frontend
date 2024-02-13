import { useLocation } from "react-router-dom";
import { Preloader } from "../../Preloader/Preloader";
import { MovieCard } from "../MoviesCard/MovieCard";
import { checkIsMovieSaved } from "../../../hooks/useMoviesLoader";
import { NOT_FOUND_MOVIES_MESSAGE } from "../../../constants/validation";

export const MovieCardList = ({
  movies,
  savedMovies,
  showSavedMovies = false,
  className,
  loadErrorText,
  isLoading,
  onSaveMovie,
  onDeleteMovie,
}) => {
  const location = useLocation();
  const isMoviesLocation = location.pathname === "/movies";

  const emptyResultText = !movies.length ? NOT_FOUND_MOVIES_MESSAGE : "";
  const errorText = emptyResultText || loadErrorText;

  return (
    <div className={`movie-card-list ${className}`}>
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          {!errorText && (
            <ul className="movie-card-list__list">
              {movies?.map((movie) => (
                <li
                  key={movie.movieId || movie.id}
                  className="movie-card-list__list-item"
                >
                  <MovieCard
                    movie={movie}
                    showSavedMovies={showSavedMovies}
                    isSaved={
                      isMoviesLocation && checkIsMovieSaved(movie, savedMovies)
                    }
                    onSaveMovie={onSaveMovie}
                    onDeleteMovie={onDeleteMovie}
                  />
                </li>
              ))}
            </ul>
          )}

          {errorText && <h2 className="movie-card-list__error">{errorText}</h2>}
        </>
      )}
    </div>
  );
};
