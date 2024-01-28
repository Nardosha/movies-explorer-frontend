import { SearchForm } from "./SearchForm/SearchForm";
import { Switcher } from "./Switcher/Switcher";
import { Separator } from "../Separator/Separator";
import { MovieCardList } from "./MoviesCardList/MovieCardList";
import { MoreButton } from "../MoreButton/MoreButton";

export const Movies = ({ movies }) => {
  return (
    <section className="movies">
      <SearchForm className="movies__search-form" />

      <Switcher className="movies__switcher" title="Короткометражки" />

      <Separator className="movies__separator" />

      <MovieCardList className="movies__list" movies={movies} />

      <MoreButton className="movies__more-button" />
    </section>
  );
};
