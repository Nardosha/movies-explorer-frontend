import { useState } from "react";

export const MovieCard = ({ movieInfo }) => {
  const [movie, setMovie] = useState(movieInfo);

  console.log({ ...movie });

  return (
    <div className="movie-card">
      {movie.isOwn && (
        <div className="movie-card__state">
          {movie.isSaved ? (
            <button className="movie-card__button">Сохранено</button>
          ) : (
            <button className="movie-card__button">Сохранить!</button>
          )}
        </div>
      )}

      <div className="movie-card___container">
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
