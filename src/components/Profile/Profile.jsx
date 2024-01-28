import { NavLink } from "react-router-dom";
import { Separator } from "../Separator/Separator";

export const Profile = () => {
  return (
    <main className="profile">
      <h1 className="profile__title">Привет, Виталий!</h1>

      <ul className="profile__info-list">
        <li className="profile__separated-list-item">
          <div className="profile__info-item">
            <p className="profile__info-label profile__info-label_name">Имя</p>
            <p className="profile__info-value profile__info-value_name">
              Виталий
            </p>
          </div>

          <Separator />
        </li>

        <li className="profile__info-item">
          <p className="profile__info-label profile__info-label_email">
            E-mail
          </p>
          <p className="profile__info-value profile__info-value_email">
            pochta@yandex.ru
          </p>
        </li>
      </ul>

      <ul className="profile__action-list">
        <li className="profile__action-button">
          <button type="button" className="profile__button">
            Редактировать
          </button>
        </li>

        <li className="profile__action-button">
          <NavLink to="/" className="profile__link">
            Выйти из аккаунта
          </NavLink>
        </li>
      </ul>
    </main>
  );
};
