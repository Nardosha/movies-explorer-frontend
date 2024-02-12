import { NavLink } from "react-router-dom";
import { Logo } from "../Logo/Logo";
import { LoginButton } from "../LoginButton/LoginButton";
import { NavigationLink } from "../NavigationLink/NavigationLink";
import { useState } from "react";

export const Header = ({ isLogged, isMenuOpen, onMenuToggle }) => {
  const onMenuClick = () => {
    onMenuToggle(!isMenuOpen);
  };

  const closeMenu = () => {
    onMenuToggle(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header__body">
        <Logo className="header__logo" />

        {isLogged && (
          <div
            className={
              isMenuOpen
                ? "header__burger header__burger_active"
                : "header__burger"
            }
            onClick={onMenuClick}
          >
            <span className="header__burger-el"></span>
          </div>
        )}

        {isLogged && (
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
                    return state.isActive
                      ? "header__link header__link_active"
                      : "header__link";
                  }}
                  onClick={onMenuClick}
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
                  onClick={closeMenu}
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
                  onClick={closeMenu}
                >
                  Сохранённые фильмы
                </NavLink>
              </li>
            </ul>

            <NavigationLink
              title="Аккаунт"
              to="profile"
              className="header__profile-button"
              closeMenu={closeMenu}
            />
          </nav>
        )}

        {!isLogged && (
          <nav className="header__actions">
            <NavLink to="/signup" className="header__action-button">
              Регистрация
            </NavLink>

            <LoginButton />
          </nav>
        )}
      </div>
    </header>
  );
};
