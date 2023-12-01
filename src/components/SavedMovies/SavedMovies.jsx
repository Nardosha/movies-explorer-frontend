import { SearchForm } from "../Movies/SearchForm/SearchForm";
import { Switcher } from "../Movies/Switcher/Switcher";
import { MovieCardList } from "../Movies/MoviesCardList/MovieCardList";
import { Separator } from "../Separator/Separator";
import { MoreButton } from "../MoreButton/MoreButton";

export const SavedMovies = ({ movies, showSavedMovies }) => {
  const savedMovies = movies.filter((movie) => movie.isSaved);

  return (
    <section className="saved-movies">
      <SearchForm className="saved-movies__search-form" />
      <Switcher className="saved-movies__switcher" title="Короткометражки" />

      <Separator className="saved-movies__separator" />

      <MovieCardList movies={savedMovies} showSavedMovies={showSavedMovies} className="saved-movies__list"/>

      <MoreButton className="saved-movies__more-button" />
    </section>
  );
};
