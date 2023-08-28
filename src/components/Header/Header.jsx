import { NavLink } from "react-router-dom";
import { Navigation } from "../Navigation/Navigation";
import logo from "../../images/icons/logo__COLOR_main-1-min.svg";
import { BurgerMenu } from "../Main/BurgerMenu/BurgerMenu";
export const Header = () => {
  return (
    <div className="header">
      <div className="header__body">
        <NavLink to="/" className="header__logo">
          <img className="header__logo" src={logo} alt="Логотип" />
        </NavLink>

          <div className="header__burger header__burger_active">
              <span className="header_burger-el"></span>
          </div>

          <nav className="header__menu header__menu_active">
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
