import { SearchForm } from "../SearchForm/SearchForm";
import { MovieCardList } from "../Movies/MoviesCardList/MovieCardList";

export const SavedMovies = ({
  movies,
  search,
  toggled,
  onSearch,
  onToggle,
  showSavedMovies,
}) => {

  return (
    <main className="saved-movies">
      <SearchForm
        search={search}
        toggled={toggled}
        onSearch={onSearch}
        onToggle={onToggle}
        className="saved-movies__search-form"
      />

      <MovieCardList
        movies={movies}
        showSavedMovies={showSavedMovies}
        className="saved-movies__list"
      />
    </main>
  );
};
