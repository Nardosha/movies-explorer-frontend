export const filterMovies = (initialMovies, { search = "", isToggled }) => {
  const filteredBySearch = initialMovies.filter((movie) => {
    const ruName = movie.nameRU.toLowerCase();
    const enName = movie.nameEN.toLowerCase();
    return (
      ruName.includes(search.toLowerCase()) ||
      enName.includes(search.toLowerCase())
    );
  });
  return filteredBySearch.filter((movie) => {
    if (isToggled) {
      return movie.duration < 40;
    }
    return movie;
  });
};
