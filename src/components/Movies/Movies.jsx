import { MovieCardList } from "./MoviesCardList/MovieCardList";
import { MoreButton } from "../MoreButton/MoreButton";
import { SearchForm } from "../SearchForm/SearchForm";

export const Movies = ({
  movies,
  loaderConfig,
  search,
  toggled,
  onSearch,
  onToggle,
  onShowMore,
}) => {
  const filteredMovies = movies.slice(0, loaderConfig.defaultCardsNumber);

  return (
    <main className="movies">
      <SearchForm
        search={search}
        toggled={toggled}
        onSearch={onSearch}
        onToggle={onToggle}
        className="movies__search-form"
      />

      <MovieCardList
        className="movies__list"
        movies={filteredMovies}
        loaderConfig={loaderConfig}
      />

      <MoreButton className="movies__more-button" onClick={onShowMore} />
    </main>
  );
};
