import {SHORT_MOVIE_DURATION} from "../constants/movies";

const filterBy = (isFilter, initialMovies) => {
  return initialMovies.filter((movie) => {
    if (isFilter) {
      return movie.duration < SHORT_MOVIE_DURATION;
    }
    return movie;
  });
};

export const filterMovies = (initialMovies, { search = "", isToggled }) => {
  if (!search.length) {
    return filterBy(isToggled, initialMovies);
  }

  const filteredBySearch = initialMovies.filter((movie) => {
    const ruName = movie.nameRU.toLowerCase();
    const enName = movie.nameEN.toLowerCase();

    return (
      ruName.includes(search.toLowerCase()) ||
      enName.includes(search.toLowerCase())
    );
  });

  return filterBy(isToggled, filteredBySearch);
};
