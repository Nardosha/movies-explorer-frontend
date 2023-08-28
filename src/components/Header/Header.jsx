import { NavLink } from "react-router-dom";
import logo from "../../images/icons/logo__COLOR_main-1-min.svg";
import { useState } from "react";
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="header">
      <div className="header__body">
        <NavLink to="/" className="header__logo">
          <img className="header__logo" src={logo} alt="Логотип" />
        </NavLink>

        <div
          className={
            isMenuOpen
              ? "header__burger header__burger_active"
              : "header__burger"
          }
          onClick={onMenuClick}
        >
          <span className="header_burger-el"></span>
        </div>

        <nav
          className={
            isMenuOpen ? "header__menu header__menu_active" : "header__menu"
          }
        >
          <ul className="header__list">
            <li className="header__item header__item_main">
              <NavLink
                to="/"
                className={(isActive) => (isActive ? "active" : "")}
              >
                Главная
              </NavLink>
            </li>
            <li className="header__item">
              <NavLink
                to="movies"
                className={(isActive) => (isActive ? "active" : "")}
              >
                Фильмы
              </NavLink>
            </li>
            <li className="header__item">
              <NavLink
                to="saved-movies"
                className={(isActive) => (isActive ? "active" : "")}
              >
                Сохранённые фильмы
              </NavLink>
            </li>
            <li className="header__item header__item_profile-button">
              <NavLink className="header__profile-button" to="me">
                Аккаунт
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
