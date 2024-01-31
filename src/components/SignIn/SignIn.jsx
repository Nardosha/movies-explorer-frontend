import { NavLink } from "react-router-dom";
import { Logo } from "../Logo/Logo";
import { FormInput } from "../FormInput/FormInput";
import { SubmitButton } from "../SubmitButton/SubmitButton";
import { useState } from "react";

export const SignIn = () => {
  const [isFormValid, setIsFormValid] = useState(true);
  const [formErrorText, setFormErrorText] = useState("");

  return (
    <main className="sign-in">
      <Logo className="sign-in__logo" />

      <h1 className="sign-in__title">Рады видеть!</h1>

      <form action="#" className="sign-in__form">
        <div className="sign-in__form-inputs">
          <FormInput
            label="E-mail"
            type="email"
            id="email"
            name="email"
            placeholder="Введите e-mail"
            className="sign-in__email-input"
            required
          />

          <FormInput
            label="Пароль"
            type="password"
            id="password"
            name="password"
            placeholder="Введите пароль"
            className="sign-in__password-input"
            minLength="2"
            maxLength="30"
            required
          />

          <div className="sign-in__error-message">{formErrorText}</div>
        </div>

        <SubmitButton text="Войти" className="sign-in__submit-button" />
      </form>

      <div className="sign-in__navigation">
        <span>Ещё не зарегистрированы?</span>
        <NavLink className="sign-in__sign-up-link" to="/signup">
          Регистрация
        </NavLink>
      </div>
    </main>
  );
};
