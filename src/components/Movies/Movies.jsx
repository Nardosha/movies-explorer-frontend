import { MovieCardList } from "./MoviesCardList/MovieCardList";
import { MoreButton } from "../MoreButton/MoreButton";
import { SearchForm } from "../SearchForm/SearchForm";
import { useMovieLoader } from "../../hooks/useMoviesLoader";

export const Movies = ({
  movies,
  loaderConfig,
  search,
  toggled,
  onSearch,
  onToggle,
}) => {
  const { slicedMovies, showMore } = useMovieLoader(movies, loaderConfig);
  const isShowMoreButton = movies.length > slicedMovies.length;

  return (
    <main className="movies">
      <SearchForm
        search={search}
        toggled={toggled}
        onSearch={onSearch}
        onToggle={onToggle}
        className="movies__search-form"
      />

      {!!movies.length && (
        <>
          <MovieCardList className="movies__list" movies={slicedMovies} />

          {isShowMoreButton && (
            <MoreButton
              className="movies__more-button"
              onClick={() => showMore()}
            />
          )}
        </>
      )}
    </main>
  );
};
