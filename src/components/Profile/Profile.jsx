import { SubmitButton } from "../SubmitButton/SubmitButton";
import { useState } from "react";

export const Profile = ({onSignOut}) => {
  const [isEdit, setIsEdit] = useState(false);
  const onChange = (e) => {
  };

  const onEditButtonClick = (e) => {
    setIsEdit(() => !isEdit);
  };

  return (
    <main className="profile">
      <h1 className="profile__title">Привет, Виталий!</h1>

      <form action="#" className="profile__form">
        <div className="profile__form-item">
          <label
            htmlFor="user-name"
            className="profile__form-label profile__info-label_name"
          >
            Имя
          </label>

          <input
            id="user-name"
            className="profile__form-input profile__form-input_name"
            placeholder="Имя"
            value="Виталий"
            type="text"
            name="username"
            minLength="2"
            maxLength="30"
            required
            disabled={!isEdit}
            onChange={onChange}
          />
        </div>

        <div className="profile__form-item">
          <label
            htmlFor="user-email"
            className="profile__form-label profile__info-label_email"
          >
            E-mail
          </label>

          <input
            id="user-email"
            className="profile__form-input profile__form-input_email"
            placeholder="E-mail"
            type="email"
            name="email"
            required
            disabled={!isEdit}
            onChange={onChange}
          />
        </div>

        {isEdit && (
          <SubmitButton text="Сохранить" className="profile__submit-button" />
        )}
      </form>

      {!isEdit && (
        <ul className="profile__action-list">
          <li className="profile__action-button">
            <button
              type="button"
              className="profile__button"
              onClick={onEditButtonClick}
            >
              Редактировать
            </button>
          </li>

          <li className="profile__action-button">
            <button type="submit" className="profile__button profile__button_type_signout" onClick={onSignOut}>
              Выйти из аккаунта
            </button>
          </li>
        </ul>
      )}
    </main>
  );
};
