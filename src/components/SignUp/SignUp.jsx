import { NavLink } from "react-router-dom";
import { Logo } from "../Logo/Logo";
import { FormInput } from "../FormInput/FormInput";
import { SubmitButton } from "../SubmitButton/SubmitButton";
import { useState } from "react";

export const SignUp = () => {
  const [isFormValid, setIsFormValid] = useState(true);
  const [formErrorText, setFormErrorText] = useState('Что-то пошло не так');

  return (
    <div className="sign-up">
      <Logo className="sign-up__logo" />

      <h1 className="sign-up__title">Добро пожаловать!</h1>

      <form action="" className="sign-up__form">
        <div className="sign-up__form-inputs">
          <FormInput
            hasError={false}
            label="Имя"
            id="name"
            name="name"
            placeholder="Введите имя"
            required
            className="sign-up__name-input"
          />

          <FormInput
            hasError={false}
            label="E-mail"
            id="email"
            name="email"
            type="email"
            placeholder="Введите e-mail"
            className="sign-up__email-input"
            required
          />

          <FormInput
            hasError={false}
            label="Пароль"
            id="password"
            name="password"
            type="password"
            placeholder="Введите пароль"
            className="sign-up__password-input"
            required
          />

            {!isFormValid && <div className="sign-up__error-message">{formErrorText}</div>}
        </div>

        <SubmitButton
          text="Зарегистрироваться"
          className="sign-up__submit-button"
        />
      </form>

      <div className="sign-up__navigation">
        <span>Уже зарегистрированы?</span>
        <NavLink className="sign-up__sign-in-link" to="/signin">
          Войти
        </NavLink>
      </div>
    </div>
  );
};
