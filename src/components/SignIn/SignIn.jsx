import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Logo } from "../Logo/Logo";
import { FormInput } from "../FormInput/FormInput";
import { SubmitButton } from "../SubmitButton/SubmitButton";
import { useFormWithValidation } from "../../hooks/useFormWithValidation";

export const SignIn = ({ onSubmit }) => {
  const [formErrorText, setFormErrorText] = useState("");

  const { values, isValid, handleChange, errors } = useFormWithValidation();
  const { email, password } = values;

  const onFormSubmit = async (e) => {
    e.preventDefault();
    console.log(values);
    await onSubmit(values);
  };

  return (
    <main className="sign-in">
      <Logo className="sign-in__logo" />

      <h1 className="sign-in__title">Рады видеть!</h1>

      <form action="#" className="sign-in__form" onSubmit={onFormSubmit}>
        <div className="sign-in__form-inputs">
          <FormInput
            label="E-mail"
            type="email"
            id="email"
            name="email"
            placeholder="Введите e-mail"
            className="sign-in__email-input"
            required
            value={email || ""}
            onChange={(e) => handleChange(e)}
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
            value={password || ""}
            onChange={(e) => handleChange(e)}
          />

          <div className="sign-in__error-message form__input-error">
            {errors.password}
          </div>
        </div>

        <SubmitButton
          text="Войти"
          className="sign-in__submit-button"
          disabled={!isValid}
        />
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
