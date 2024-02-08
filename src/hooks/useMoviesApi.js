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

export const formatMovies = async (initialMovies) => {
  return initialMovies.map((movie) => {
    return {
      ...movie,
      humanDuration: formatDurationToHuman(movie.duration),
      image: { ...movie.image, url: BASE_API + movie.image.url },
    };
  });
};
