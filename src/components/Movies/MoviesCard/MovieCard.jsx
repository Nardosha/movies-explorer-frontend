import { RoundedButton } from "../../RoundedButton/RoundedButton";
import { createMovie } from "../../../hooks/useMoviesLoader";

export const MovieCard = ({ movie, showSavedMovies, isSaved, onSaveMovie }) => {
  const saveMovie = () => {
    onSaveMovie(createMovie(movie));
  };
  return (
    <div className="movie-card">
      {showSavedMovies && (
        <button
          className="movie-card__button movie-card__delete-button"
          type="button"
        />
      )}

      {!showSavedMovies &&
        (isSaved ? (
          <button
            className="movie-card__button movie-card__saved-button"
            type="button"
          />
        ) : (
          <RoundedButton
            title="Сохранить"
            className="movie-card__button movie-card__save-button"
            type="submit"
            onClick={saveMovie}
          />
        ))}

      <div className="movie-card__container">
        <a
          href={movie.trailerLink}
          target="_blank"
          className="movie-card__link"
        >
          <img
            className="movie-card__image"
            src={movie.image}
            alt={movie.alternativeText}
          />
        </a>

        <ul className="movie-card__info-list">
          <h2 className="movie-card__title">{movie.nameRU}</h2>
          <li className="movie-card__duration">{movie.humanDuration}</li>
        </ul>
      </div>
    </div>
  );
};
