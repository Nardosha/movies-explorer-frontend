import { SearchForm } from "../Movies/SearchForm/SearchForm";
import { MovieCardList } from "../Movies/MoviesCardList/MovieCardList";
import { Separator } from "../Separator/Separator";
import { MoreButton } from "../MoreButton/MoreButton";

export const SavedMovies = ({ movies, showSavedMovies }) => {
  const savedMovies = movies.filter((movie) => movie.isSaved);

  return (
    <main className="saved-movies">
      <SearchForm className="saved-movies__search-form" />

      <Separator className="saved-movies__separator" />

      <MovieCardList movies={savedMovies} showSavedMovies={showSavedMovies} className="saved-movies__list"/>

      <MoreButton className="saved-movies__more-button" />
    </main>
  );
};
