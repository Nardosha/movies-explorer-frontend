import { Logo } from "../Logo/Logo";
import { FormInput } from "../FormInput/FormInput";
import { Link, NavLink, Route } from "react-router-dom";
import { SubmitButton } from "../SubmitButton/SubmitButton";

export const Register = () => {
  return (
    <div className="register">
      <Logo className="register__logo" />

      <h1 className="register__title">Добро пожаловать!</h1>

      <form action="" className="register__form">
        <div className="register__form-inputs">
          <FormInput
            label="Имя"
            id="name"
            name="name"
            placeholder="Введите имя"
            required
            className="register__name-input"
          />

          <FormInput
            label="E-mail"
            id="email"
            name="email"
            placeholder="Введите e-mail"
            required
            className="register__email-input"
          />

          <FormInput
            label="Пароль"
            id="password"
            name="password"
            placeholder="Введите пароль"
            className="register__password"
            required
          />
        </div>

        <SubmitButton
          text="Зарегистрироваться"
          className="register__submit-button"
        />
      </form>

      <div className="register__navigation">
        <span>Уже зарегистрированы?</span>
        <NavLink className="register__signin-link" to="/signin">Войти</NavLink>
      </div>
    </div>
  );
};
