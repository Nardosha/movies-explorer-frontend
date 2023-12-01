import { NavLink } from "react-router-dom";

export const Profile = () => {
  return (
    <div className="profile">
        <h1 className="profile__title">Привет, Виталий!</h1>

        <ul className="profile__info-list">
          <li className="profile__info-item">
            <p className="profile__info-label">Имя</p>
            <p className="profile__info-value">Виталий</p>
          </li>

            <div className="profile__info-list-separator" />

          <li className="profile__info-item">
            <p className="profile__info-label">E-mail</p>
            <p className="profile__info-value">pochta@yandex.ru</p>
          </li>
        </ul>

        <ul className="profile__action-list">
          <li className="profile__action-button">
            <button type="button" className="profile__button">Редактировать</button>
          </li>

          <li className="profile__action-button">
            <NavLink to="/" className="profile__link">
              Выйти из аккаунта
            </NavLink>
          </li>
        </ul>
    </div>
  );
};
