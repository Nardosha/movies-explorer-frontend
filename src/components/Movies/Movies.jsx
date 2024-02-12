import { MovieCardList } from "./MoviesCardList/MovieCardList";
import { MoreButton } from "../MoreButton/MoreButton";
import { SearchForm } from "../SearchForm/SearchForm";
import { useMovieLoader } from "../../hooks/useMoviesLoader";
import { LocalStorageKeys } from "../../constants/movies";
import { useEffect, useState } from "react";

export const Movies = ({
  movies,
  savedMovies,
  loaderConfig,
  search,
  toggled,
  onSearch,
  isLoading,
  onToggle,
  onSaveMovie,
}) => {
  const { slicedMovies, showMore } = useMovieLoader(movies, loaderConfig);
  const isShowMoreButton = movies.length > slicedMovies.length;
  const [isShowEmptyResult, setIsShowEmptyResult] = useState(false);

  const handleSearch = (newSearch) => {
    onSearch(newSearch, LocalStorageKeys.SEARCH.MOVIES);
  };

  const handleToggle = (newValue) => {
    onToggle(newValue, LocalStorageKeys.TOGGLE.IS_SHOW_SHORT_MOVIES);
  };

  useEffect(() => {
    setIsShowEmptyResult(!!(search.length && !movies.length));
  }, [movies, search]);

  console.log(search, toggled);

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
          className="movies__list"
          movies={slicedMovies}
          showEmptyText={isShowEmptyResult}
          isLoading={isLoading}
          savedMovies={savedMovies}
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
