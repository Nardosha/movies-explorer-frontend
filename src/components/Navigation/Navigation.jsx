import { NavLink } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav className="navigation">
      <NavLink to="/" className={(isActive) => (isActive ? "active" : "")}>
        Главная
      </NavLink>

      <NavLink to="movies" className={(isActive) => (isActive ? "active" : "")}>
        Фильмы
      </NavLink>

      <NavLink
        to="saved-movies"
        className={(isActive) => (isActive ? "active" : "")}
      >
        Сохранённые фильмы
      </NavLink>

      <NavLink className="header__profile-button" to="me">
        Аккаунт
      </NavLink>
    </nav>
  );
};
