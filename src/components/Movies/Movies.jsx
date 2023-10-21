import { SearchForm } from "./SearchForm/SearchForm";
import { Switcher } from "./Switcher/Switcher";

export const Movies = () => {
  return (
    <div className="movies">
      <SearchForm className="movies__search-form" />
      <Switcher title="Короткометражки" />
    </div>
  );
};
