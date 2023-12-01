import {RoundedButton} from "../../RoundedButton/RoundedButton";

export const MovieCard = ({ movie, showSavedMovies }) => {
  console.log("MovieCard", showSavedMovies);

  return (
    <div className="movie-card">
      {showSavedMovies && (
        <button className="movie-card__button movie-card__delete-button" />
      )}

      {!showSavedMovies &&
        (movie.isSaved ? (
          <button className="movie-card__button movie-card__saved-button" />
        ) : (
          <RoundedButton
            title="Сохранить"
            className="movie-card__button movie-card__save-button"
          />
        ))}

      <div className="movie-card__container">
        <img
          className="movie-card__image"
          src={require(`../../../images/card-${movie.id}.jpg`)}
          alt="Постер фильма"
        />
        <ul className="movie-card__info-list">
          <li className="movie-card__title">{movie.title}</li>
          <li className="movie-card__duration">{movie.duration}</li>
        </ul>
      </div>
    </div>
  );
};
