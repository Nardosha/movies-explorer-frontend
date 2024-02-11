import { useLocation } from "react-router-dom";
import { MovieCard } from "../MoviesCard/MovieCard";
import { checkIsMovieSaved } from "../../../hooks/useMoviesLoader";

export const MovieCardList = ({
  movies,
  savedMovies,
  showSavedMovies = false,
  className,
  onSaveMovie,
}) => {
  const location = useLocation();
  const isMoviesLocation = location.pathname === "/movies";

  return (
    <div className={`movie-card-list ${className}`}>
      <ul className="movie-card-list__list">
        {movies?.map((movie) => (
          <li key={movie.movieId} className="movie-card-list__list-item">
            <MovieCard
              movie={movie}
              showSavedMovies={showSavedMovies}
              isSaved={
                isMoviesLocation && checkIsMovieSaved(movie, savedMovies)
              }
              onSaveMovie={onSaveMovie}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
