import {SHORT_MOVIE_DURATION} from "../constants/movies";
import {BASE_MOVIES_API, MOVIES_API_URL} from "../constants/api";

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

export const createMovie = (data) => {
  return {
    country: data.country,
    director: data.director,
    duration: data.duration,
    year: data.year,
    description: data.description,
    image: `${BASE_MOVIES_API}${data.image.url}`,
    trailerLink: data.trailerLink,
    thumbnail: `${MOVIES_API_URL}${data.image.formats.thumbnail.url}`,
    movieId: data.id,
    nameRU: data.nameRU,
    nameEN: data.nameEN,
  };
};
