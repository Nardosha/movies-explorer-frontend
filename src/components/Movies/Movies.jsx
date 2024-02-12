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
  }, []);

  console.log(search, toggled);

  return (
    <main className="movies">
      <SearchForm
        search={search}
        toggled={toggled}
        onSearch={handleSearch}
        onToggle={handleToggle}
        className="movies__search-form"
      />

      <>
        <MovieCardList
          className="movies__list"
          movies={slicedMovies}
          showEmptyText={isShowEmptyResult}
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
