import { useState } from "react";
import { ValidationErrorText } from "../../utils/validation";
import {Switcher} from "../Switcher/Switcher";

export const SearchForm = ({ className }) => {
  const [searchText, setSearchText] = useState("");
  const [isShowError, setIsShowError] = useState(false);
  const [isToggled, setIsToggled] = useState(false);

  const onInputChange = (e) => {
    toggleError(false);
    setSearchText(e.target.value);
  };

  const onToggle = () => {
    setIsToggled(!isToggled)
  }

  const toggleError = (value) => {
    setIsShowError(value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!searchText.trim()) {
      toggleError(true);
      return;
    }
    const res = {
      search: searchText,
      isToggled,
    };

    console.log("onSearchSubmit", res);
    return res;
  };

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
          isToggled={isToggled}
          onToggle={onToggle}
        />
      </form>
    </div>
  );
};
