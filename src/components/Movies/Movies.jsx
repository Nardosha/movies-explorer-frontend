import { SearchForm } from "./SearchForm/SearchForm";
import { MovieCardList } from "./MoviesCardList/MovieCardList";
import { MoreButton } from "../MoreButton/MoreButton";

export const Movies = ({ movies }) => {
  return (
    <main className="movies">
      <SearchForm className="movies__search-form" />

      <MovieCardList className="movies__list" movies={movies} />

      <MoreButton className="movies__more-button" />
    </main>
  );
};
