import { MovieCard } from "../MoviesCard/MovieCard";

export const MovieCardList = ({ movieList }) => {
  return (
    <div className="movie-card-list">
      <ul className="movie-card-list__list">
        {movieList.map((movie) => (
          <li key={movie.id} className="movie-card-list__list-item">
            <MovieCard  movieInfo={movie} />
          </li>
        ))}
      </ul>
    </div>
  );
};
