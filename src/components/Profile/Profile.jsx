import { NavLink } from "react-router-dom";
import { Separator } from "../Separator/Separator";
import { SubmitButton } from "../SubmitButton/SubmitButton";
import { useState } from "react";

export const Profile = () => {
  const [isEdit, setIsEdit] = useState(false);
  const onChange = (e) => {
    console.log("onChange", e);
  };

  const onEditButtonClick = (e) => {
    console.log("onEditButtonClick");
    setIsEdit(() => !isEdit);
  };

  return (
    <main className="profile">
      <h1 className="profile__title">Привет, Виталий!</h1>

      <form action="#" className="profile__form">
        <div className="profile__form-item">
          <label
            htmlFor="user-name"
            className="profile__info-label profile__info-label_name"
          >
            Имя
          </label>

          <input
            id="user-name"
            className="profile__form-input profile__form-input_name"
            placeholder="Имя"
            value="Виталий"
            type="text"
            name="name"
            minLength="2"
            maxLength="30"
            required
            disabled={!isEdit}
            onChange={onChange}
          />
        </div>

        <Separator />

        <div className="profile__form-item">
          <label
            htmlFor="user-name"
            className="profile__info-label profile__info-label_name"
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
      </form>

      {isEdit && (
        <SubmitButton text="Сохранить" className="profile__submit-button"/>
      )}

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
            <NavLink to="/" className="profile__link">
              Выйти из аккаунта
            </NavLink>
          </li>
        </ul>
      )}
    </main>
  );
};
