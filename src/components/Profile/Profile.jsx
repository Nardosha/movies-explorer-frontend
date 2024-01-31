import { NavLink } from "react-router-dom";
import { Separator } from "../Separator/Separator";

export const Profile = () => {
  const onChange = (e) => {
    console.log('onChange', e)
  }
  return (
    <main className="profile">
      <h1 className="profile__title">Привет, Виталий!</h1>

      <ul className="profile__info-list">
        <li className="profile__separated-list-item">
          <div className="profile__info-item">
            <label
              htmlFor="user-name"
              className="profile__info-label profile__info-label_name"
            >
              Имя
            </label>
            <input
              id="user-name"
              className="profile__info-value profile__info-value_name"
              placeholder="Имя"
              value="Виталий"
              type="text"
              name="name"
              minLength="2"
              maxLength="30"
              required
              onChange={onChange}
            />
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
