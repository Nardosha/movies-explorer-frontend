import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import Form from "../Form/Form";
import { FormHeader } from "../FormHeader/FormHeader";
import { useFormWithValidation } from "../../hooks/useFormWithValidation";
import { USER_NAME_VALIDATION } from "../../constants/validation";

export const Profile = ({ errorText, onSignOut, onUpdateUser }) => {
  const { values, isValid, handleChange, errors, setValues, resetForm } =
    useFormWithValidation();
  const { name, email } = values;

  const currentUser = useContext(UserContext);
  const [isEdit, setIsEdit] = useState(false);
  const [isDirtyForm, setIsDirtyForm] = useState(false);

  const onEditButtonClick = () => {
    console.log("onEditButtonClick", isEdit);
    setIsEdit(true);
    setIsDirtyForm(() => isValuesChanged());
  };

  const isValuesChanged = () => {
    const res = Object.keys(values).some(
      (key) => values[key].trim() !== currentUser[key],
    );
    console.log("isValuesChanged", res);

    return res;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("onSubmit");
    if (!isValuesChanged()) return;

    onUpdateUser(values);
    setIsEdit(false);
  };

  console.log("CURRENT USER", "");
  useEffect(() => {
    console.log(isValuesChanged());
    setIsDirtyForm(() => isValuesChanged());
  }, [values]);

  useEffect(() => {
    resetForm();
    setValues({ name: currentUser.name, email: currentUser.email });
    console.log(currentUser);
  }, [currentUser, setValues, resetForm]);

  return (
    <main className="profile">
      <section className="profile__wrapper">
        <FormHeader
          className="profile__title"
          title={`Привет, ${currentUser.name}!`}
        />

        <Form
          buttonText="Сохранить"
          isValid={isValid}
          className="profile__form"
          formError={""}
          btnDisabled={!isValid || !isDirtyForm}
          btnClassName="profile__submit-button"
          errorText={errorText}
          isEdit={isEdit}
          onSubmit={onSubmit}
        >
          <div className="profile__form-item-wrapper">
            <div className="profile__form-item">
              <label
                htmlFor="user-name"
                className="profile__form-label profile__info-label_name"
              >
                Имя
              </label>

              <input
                id="user-name"
                value={name || ""}
                type="text"
                disabled={!isEdit}
                pattern={USER_NAME_VALIDATION}
                required
                placeholder="Имя"
                name="name"
                minLength="2"
                maxLength="30"
                className="profile__form-input profile__form-input_name"
                onChange={(e) => handleChange(e)}
              />
            </div>

            <span className="form__input-error">{errors.name || ""} </span>
          </div>
          <div className="profile__form-item-wrapper">
            <div className="profile__form-item">
              <label
                htmlFor="user-email"
                className="profile__form-label profile__info-label_email"
              >
                E-mail
              </label>

              <input
                id="user-email"
                value={email || ""}
                disabled={!isEdit}
                required
                placeholder="E-mail"
                type="email"
                name="email"
                className="profile__form-input profile__form-input_email"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <span className="form__input-error">{errors.email || ""} </span>
          </div>
        </Form>

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
              <button
                type="submit"
                className="profile__button profile__button_type_signout"
                onClick={onSignOut}
              >
                Выйти из аккаунта
              </button>
            </li>
          </ul>
        )}
      </section>
    </main>
  );
};
