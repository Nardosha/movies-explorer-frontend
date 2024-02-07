import { SearchForm } from "../SearchForm/SearchForm";
import { MovieCardList } from "../Movies/MoviesCardList/MovieCardList";

export const SavedMovies = ({
  movies,
  filters,
  onFiltersChanged,
  showSavedMovies,
}) => {
  const savedMovies = movies.filter((movie) => movie.isSaved);

  return (
    <main className="saved-movies">
      <SearchForm
        filters={filters}
        onFiltersChanged={onFiltersChanged}
        className="saved-movies__search-form"
      />

      <MovieCardList
        movies={savedMovies}
        showSavedMovies={showSavedMovies}
        className="saved-movies__list"
      />
    </main>
  );
};
