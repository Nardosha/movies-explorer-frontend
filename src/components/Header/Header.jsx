import { NavLink } from "react-router-dom";
import logo from "../../images/icons/logo__COLOR_main-1-min.svg";
import { useState } from "react";
import { ProfileButton } from "../ProfileButton/ProfileButton";
import { Logo } from "../AppLogo/Logo";
import {LoginButton} from "../LoginButton/LoginButton";
export const Header = ({ isLogged }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="header">
      <div className="header__body">
        <NavLink to="/" className="header__logo">
          <Logo />
        </NavLink>

        {isLogged.current && (
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
        )}

        {isLogged.current && (
          <nav
            className={
              isMenuOpen ? "header__menu header__menu_active" : "header__menu"
            }
          >
            <ul className="header__list">
              <li className="header__item header__item_main">
                <NavLink
                  to="/"
                  className={(state) => {
                    console.log(state, state.isActive);
                    return state.isActive
                      ? "header__link header__link_active"
                      : "header__link";
                  }}
                >
                  Главная
                </NavLink>
              </li>
              <li className="header__item">
                <NavLink
                  to="movies"
                  className={(state) =>
                    state.isActive
                      ? "header__link header__link_active"
                      : "header__link"
                  }
                >
                  Фильмы
                </NavLink>
              </li>

              <li className="header__item">
                <NavLink
                  to="saved-movies"
                  className={(state) =>
                    state.isActive
                      ? "header__link header__link_active"
                      : "header__link"
                  }
                >
                  Сохранённые фильмы
                </NavLink>
              </li>

              <li className="header__item header__item_action-button">
                <ProfileButton />
              </li>
            </ul>
          </nav>
        )}

        {!isLogged.current && (
          <div className="header__actions">
            <button className="header__action-button">Регистрация</button>
            <LoginButton />
          </div>
        )}
      </div>
    </div>
  );
};