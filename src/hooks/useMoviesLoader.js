import { useEffect, useState } from "react";
import { loadMovies } from "../utils/MoviesApi";
import { formatDurationToHuman } from "../helpers/dates.helper";
import { BASE_MOVIES_API, MOVIES_API_URL } from "../constants/api";

export const getMovies = async () => {
  try {
    const movies = await loadMovies();
    return formatMovies(movies);
  } catch (e) {
    console.log(e);
  }
};

export const useMovieLoader = (initialMovies, loaderConfig) => {
  console.log("useMovieLoader", loaderConfig);

  const sliceMovies = (initialMovies, count) => {
    return initialMovies.slice(0, count);
  };

  const [movieCount, setMovieCount] = useState(loaderConfig.defaultCardsNumber);
  const [slicedMovies, setSlicedMovies] = useState([
    ...sliceMovies(initialMovies, loaderConfig.defaultCardsNumber),
  ]);

  const showMore = () => {
    setMovieCount((prev) => prev + loaderConfig.loadingCardsNumber);
  };
  useEffect(() => {
    setMovieCount(loaderConfig.defaultCardsNumber);
  }, [loaderConfig]);

  useEffect(() => {
    setSlicedMovies([...sliceMovies(initialMovies, movieCount)]);
  }, [movieCount, initialMovies]);

  return {
    slicedMovies,
    showMore,
  };
};

export const formatMovies = (initialMovies) => {
  return initialMovies.map(formatMovie);
};

export const formatMovie = (movie) => {
  return {
    ...movie,
    alternativeText: movie.image.alternativeText,
    humanDuration: formatDurationToHuman(movie.duration),
    image: `${BASE_MOVIES_API}${movie.image.url}`,
    movieId: movie.id,
    thumbnail: `${MOVIES_API_URL}${movie.image.formats.thumbnail.url}`,
    isSaved: false,
  };
};

export const checkIsMovieSaved = (movie, savedMovies) => {
  console.log("checkIsMovieSaved");
  return !!savedMovies.find(
    (savedMovie) => movie.movieId === savedMovie.movieId,
  );
};

//todo
// export const handleFormatMovies = (initialMovies, savedMovies) => {
//   console.log("handleFormatMovies");
//   const saved = initialMovies.map((initialMovie) => {
//     const savedMovie = savedMovies.find(
//       (savedMovie) => initialMovie.movieId === savedMovie.movieId,
//     );
//
//     if (!savedMovie) return initialMovie;
//
//     return {
//       ...initialMovie,
//       isSaved: true,
//     };
//   });
//
//   return saved;
// };

export const createMovie = (initialMovie) => {
  return {
    country: initialMovie.country,
    director: initialMovie.director,
    duration: initialMovie.duration,
    year: initialMovie.year,
    description: initialMovie.description,
    nameRU: initialMovie.nameRU,
    nameEN: initialMovie.nameEN,
    trailerLink: initialMovie.trailerLink,
    image: initialMovie.image,
    movieId: initialMovie.movieId,
    thumbnail: initialMovie.thumbnail,
  };
};
