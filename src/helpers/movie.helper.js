export const filterMovies = (initialMovies, { search = "", isToggled }) => {
  const filteredBySearch = initialMovies.filter((movie) => {
    const name = movie.nameRU.toLowerCase();
    return name.includes(search.toLowerCase());
  });
  const filteredByDuration = filteredBySearch.filter((movie) => {
    if (isToggled) {
      return movie.duration < 40;
    }
    return movie;
  });
  return filteredByDuration;
};
