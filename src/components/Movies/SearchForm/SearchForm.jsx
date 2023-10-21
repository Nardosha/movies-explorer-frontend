export const SearchForm = () => {
  return (
    <section className="search-form">
      <label className="search-form__label" htmlFor="search-input" />
      <input
        type="text"
        id="search-input"
        className="search-form__input"
        placeholder="Фильм"
      />

      <button className="search-form__button" />
    </section>
  );
};
