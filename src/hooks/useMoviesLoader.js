import { useEffect, useState } from "react";
import { loadMovies } from "../utils/MoviesApi";

export const getMovies = async () => {
  try {
    return await loadMovies();
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

export const checkIsMovieSaved = (movie, savedMovies) => {
  return !!savedMovies.find((savedMovie) => movie.id === savedMovie.movieId);
};
