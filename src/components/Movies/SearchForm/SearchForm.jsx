export const SearchForm = ({ className }) => {
  return (
    <div className={`search-form ${className}`}>
      <form action="#" className="search-form__form">
        <label className="search-form__label" htmlFor="search-input" />
        <input
          type="text"
          id="search-input"
          className="search-form__input"
          placeholder="Фильм"
          required
        />

        <button className="search-form__button" type="submit" />
      </form>
    </div>
  );
};
