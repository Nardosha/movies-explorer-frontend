import { SearchForm } from "./SearchForm/SearchForm";
import { Switcher } from "./Switcher/Switcher";
import { Separator } from "../Separator/Separator";
import { MovieCardList } from "./MoviesCardList/MovieCardList";
import { MOVIES } from "./MoviesCard/MovieCard.helper";

export const Movies = () => {
  const movieList = MOVIES;
  console.log(movieList);

  return (
    <section className="movies">
      <SearchForm className="movies__search-form" />
      <Switcher className="movies__switcher" title="Короткометражки" />

      {/*<Separator className="movies__separator" />*/}

      <MovieCardList movieList={movieList} />
    </section>
  );
};
