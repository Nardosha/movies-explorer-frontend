import { useEffect, useState } from "react";
import { ValidationErrorText } from "../../utils/validation";
import { Switcher } from "../Switcher/Switcher";

export const SearchForm = ({
  search,
  toggled,
  onSearch,
  onToggle,
  className,
}) => {
  const [searchText, setSearchText] = useState(search);
  const [isShowError, setIsShowError] = useState(false);

  const onInputChange = (e) => {
    toggleError(false);
    setSearchText(e.target.value);
  };

  const toggleError = (value) => {
    setIsShowError(value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!searchText.trim()) {
      toggleError(true);
      return;
    }

    onSearch(searchText);
  };

  useEffect(() => {
    setSearchText(search);
  }, [search]);

  return (
    <div className={`search-form ${className}`}>
      <form
        action="#"
        name="search"
        className="search-form__form"
        onSubmit={onSubmit}
      >
        <fieldset className="search-form__search">
          <label className="search-form__label" htmlFor="search-input" />
          <input
            type="text"
            id="search-input"
            className="search-form__input"
            placeholder="Фильм"
            value={searchText || ""}
            onChange={onInputChange}
          />

          {isShowError && (
            <span className="search-form__error" id="input-search-error">
              {ValidationErrorText.EMPTY_SEARCH_FIELD}
            </span>
          )}

          <button className="search-form__button" type="submit" />
        </fieldset>

        <Switcher
          className="search-form__checkbox"
          title="Короткометражки"
          isToggled={toggled}
          onToggle={() => onToggle(!toggled)}
        />
      </form>
    </div>
  );
};
