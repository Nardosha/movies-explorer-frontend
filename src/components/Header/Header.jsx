import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <div>Header</div>

      <nav>
        <NavLink
          to="movies"
          className={(isActive) => (isActive ? "active" : "")}
        >
          Фильмы
        </NavLink>
        <NavLink
          to="saved-movies"
          className={(isActive) => (isActive ? "active" : "")}
        >
          Сохранённые фильмы
        </NavLink>
        <NavLink to="me">
          Аккаунт
        </NavLink>
      </nav>
    </>
  );
};
