import { MovieCardList } from "./MoviesCardList/MovieCardList";
import { MoreButton } from "../MoreButton/MoreButton";
import { SearchForm } from "../SearchForm/SearchForm";
import { useMovieLoader } from "../../hooks/useMoviesLoader";
import { LocalStorageKeys } from "../../constants/movies";
import { useEffect, useState } from "react";
import { NOT_FOUND_MOVIES_MESSAGE } from "../../constants/validation";

export const Movies = ({
  movies,
  savedMovies,
  loaderConfig,
  search,
  toggled,
  onSearch,
  isLoading,
  loadErrorText,
  onToggle,
  onSaveMovie,
}) => {
  const { slicedMovies, showMore } = useMovieLoader(movies, loaderConfig);
  const [emptyResultText, setEmptyResultText] = useState("");

  const isShowMoreButton =
    movies.length > slicedMovies.length && !loadErrorText && !emptyResultText;

  const handleSearch = (newSearch) => {
    onSearch(newSearch, LocalStorageKeys.SEARCH.MOVIES);
  };

  const handleToggle = (newValue) => {
    onToggle(newValue, LocalStorageKeys.TOGGLE.IS_SHOW_SHORT_MOVIES);
  };

  useEffect(() => {
    if (search.length && !movies.length) {
      setEmptyResultText(NOT_FOUND_MOVIES_MESSAGE);
    }
  }, [movies, search]);

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
          emptyResultText={emptyResultText}
          loadErrorText={loadErrorText}
          className="movies__list"
          onSaveMovie={onSaveMovie}
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
