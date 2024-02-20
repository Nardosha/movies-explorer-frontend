import { MovieCardList } from "./MoviesCardList/MovieCardList";
import { MoreButton } from "../MoreButton/MoreButton";
import { SearchForm } from "../SearchForm/SearchForm";
import { useMovieLoader } from "../../hooks/useMoviesLoader";
import { LocalStorageKeys } from "../../constants/movies";

export const Movies = ({
  movies,
  savedMovies,
  loaderConfig,
  search,
  toggled,
  onSearch,
  isLoading,
  loadErrorText,
  hadFiltered,
  onToggle,
  onSaveMovie,
  onDeleteMovie,
}) => {
  const { slicedMovies, showMore } = useMovieLoader(movies, loaderConfig);

  const isShowMoreButton =
    movies.length > slicedMovies.length && !loadErrorText.length && !isLoading;

  const handleSearch = (newSearch) => {
    onSearch(newSearch, LocalStorageKeys.SEARCH.MOVIES);
  };

  const handleToggle = (newValue) => {
    onToggle(newValue, LocalStorageKeys.TOGGLE.IS_SHOW_SHORT_MOVIES);
  };

  return (
    <main className="movies">
      <SearchForm
        search={search}
        toggled={toggled}
        validateSearch={true}
        className="movies__search-form"
        onSearch={handleSearch}
        onToggle={handleToggle}
      />

      <>
        <MovieCardList
          isLoading={isLoading}
          movies={slicedMovies}
          savedMovies={savedMovies}
          loadErrorText={loadErrorText}
          hadFiltered={hadFiltered}
          className="movies__list"
          onSaveMovie={onSaveMovie}
          onDeleteMovie={onDeleteMovie}
        />

        {isShowMoreButton && (
          <MoreButton
            className="movies__more-button"
            onClick={() => showMore()}
          />
        )}
      </>
    </main>
  );
};
