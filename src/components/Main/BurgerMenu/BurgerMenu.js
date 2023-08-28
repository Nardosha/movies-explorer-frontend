import { NavLink } from "react-router-dom";

export const BurgerMenu = () => {
  return (
    <div className="burger">
      <div className="burger__icon burger__icon_active"></div>
      <div className="burger__icon burger__icon_active"></div>

      <nav className="burger__menu">
        <ul className="burger__list">
          <li className="burger__item">
            <NavLink
              to="/"
              className={(isActive) => (isActive ? "active" : "")}
            >
              Главная
            </NavLink>
          </li>
          <li className="burger__item">
            <NavLink
              to="movies"
              className={(isActive) => (isActive ? "active" : "")}
            >
              Фильмы
            </NavLink>
          </li>
          <li className="burger__item">
            <NavLink
              to="saved-movies"
              className={(isActive) => (isActive ? "active" : "")}
            >
              Сохранённые фильмы
            </NavLink>
          </li>
          <li className="burger__item">
            <NavLink className="burger__profile-button" to="me">
              Аккаунт
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
