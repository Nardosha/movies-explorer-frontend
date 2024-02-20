import { RoundedButton } from "../../RoundedButton/RoundedButton";
import { formatDurationToHuman } from "../../../helpers/dates.helper";
import { useLocation } from "react-router-dom";
import { BASE_MOVIES_API } from "../../../constants/api";

export const MovieCard = ({
  movie: initialMovie,
  showSavedMovies,
  isSaved,
  onSaveMovie,
  onDeleteMovie,
}) => {
  const location = useLocation();
  const isMoviesLocation = location.pathname === "/movies";

  const movie = {
    ...initialMovie,
    duration: formatDurationToHuman(initialMovie.duration),
    image: isMoviesLocation
      ? `${BASE_MOVIES_API}${initialMovie.image.url}`
      : initialMovie.image,
  };
  const saveMovie = () => {
    onSaveMovie(initialMovie);
  };

  const deleteMovie = () => {
    console.log("deleteMovie");
    onDeleteMovie(initialMovie);
  };

  return (
    <div className="movie-card">
      {showSavedMovies && (
        <button
          className="movie-card__button movie-card__delete-button"
          type="button"
          onClick={deleteMovie}
        />
      )}

      {!showSavedMovies &&
        (isSaved ? (
          <button
            className="movie-card__button movie-card__saved-button"
            type="button"
            onClick={deleteMovie}
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
            alt={movie.image.alternativeText}
          />
        </a>

        <ul className="movie-card__info-list">
          <h2 className="movie-card__title">{movie.nameRU}</h2>
          <li className="movie-card__duration">{movie.duration}</li>
        </ul>
      </div>
    </div>
  );
};
