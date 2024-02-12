import { SearchForm } from "../SearchForm/SearchForm";
import { MovieCardList } from "../Movies/MoviesCardList/MovieCardList";
import { LocalStorageKeys } from "../../constants/movies";

export const SavedMovies = ({
  movies,
  search,
  toggled,
  isLoading,
  onSearch,
  onToggle,
  showSavedMovies,
  onDeleteMovie,
}) => {
  const handleSearch = (newSearch) => {
    onSearch(newSearch, LocalStorageKeys.SEARCH.SAVED_MOVIES);
  };

  const handleToggle = (newValue) => {
    onToggle(newValue, LocalStorageKeys.TOGGLE.IS_SHOW_SHORT_SAVED_MOVIES);
  };

  return (
    <main className="saved-movies">
      <SearchForm
        search={search}
        toggled={toggled}
        onSearch={handleSearch}
        onToggle={handleToggle}
        className="saved-movies__search-form"
      />

      <MovieCardList
        movies={movies}
        isLoading={isLoading}
        showSavedMovies={showSavedMovies}
        onDeleteMovie={onDeleteMovie}
        className="saved-movies__list"
      />
    </main>
  );
};
