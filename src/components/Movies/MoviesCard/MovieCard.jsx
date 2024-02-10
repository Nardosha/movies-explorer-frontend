import { RoundedButton } from "../../RoundedButton/RoundedButton";

export const MovieCard = ({ movie, showSavedMovies, onSaveMovie }) => {
  console.log(movie);
  return (
    <div className="movie-card">
      {showSavedMovies && (
        <button
          className="movie-card__button movie-card__delete-button"
          type="button"
        />
      )}

      {!showSavedMovies &&
        (movie.isSaved ? (
          <button
            className="movie-card__button movie-card__saved-button"
            type="button"
          />
        ) : (
          <RoundedButton
            title="Сохранить"
            className="movie-card__button movie-card__save-button"
            type="submit"
            onClick={() => onSaveMovie(movie)}
          />
        ))}

      <div className="movie-card__container">
        <a href={movie.trailerLink} target="_blank" className="movie-card__link">
        <img
          className="movie-card__image"
          src={movie.url}
          alt={movie.image.alternativeText}
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
