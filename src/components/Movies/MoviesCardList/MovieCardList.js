import { MovieCard } from "../MoviesCard/MovieCard";

export const MovieCardList = ({
  movies,
  showSavedMovies = false,
  className,
}) => {

  return (
    <div className={`movie-card-list ${className}`}>
      <ul className="movie-card-list__list">
        {movies.map((movie) => (
          <li key={movie.id} className="movie-card-list__list-item">
            <MovieCard movie={movie} showSavedMovies={showSavedMovies} />
          </li>
        ))}
      </ul>
    </div>
  );
};
