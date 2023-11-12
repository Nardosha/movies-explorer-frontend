import { MovieCard } from "../MoviesCard/MovieCard";

export const MovieCardList = ({ movies, showSavedMovies = false }) => {
  console.log("showSavedMovies", showSavedMovies);

  return (
    <div className="movie-card-list">
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
