import { useEffect, useState } from "react";
import { BASE_API, loadMovies } from "../utils/MoviesApi";
import { formatDurationToHuman } from "../helpers/dates.helper";

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

export const formatMovies = async (initialMovies) => {
  return initialMovies.map((movie) => {
    return {
      ...movie,
      humanDuration: formatDurationToHuman(movie.duration),
      image: { ...movie.image, url: BASE_API + movie.image.url },
    };
  });
};
