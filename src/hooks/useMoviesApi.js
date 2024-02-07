import { getMovies } from "../utils/MoviesApi";

export const useMoviesApi = async ({ search, isShowShortMovies }) => {
  try {
    const movies = await getMovies();

    return movies
      .filter((movie) => movie.nameRU.includes(search))
      .filter((movie) => {
        if (isShowShortMovies) {
          return movie.duration < 40;
        }
        return movie;
      });
  } catch (e) {
    console.log(e);
  }
};

export const filterMovies = async (initialMovies, { search, isShowShortMovies }) => {
  try {
    return initialMovies
      .filter((movie) => movie.nameRU.includes(search))
      .filter((movie) => {
        if (isShowShortMovies) {
          return movie.duration < 40;
        }
        return movie;
      });
  } catch (e) {
    console.log(e);
  }
};
