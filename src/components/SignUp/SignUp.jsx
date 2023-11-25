import { NavLink } from "react-router-dom";
import { Logo } from "../Logo/Logo";
import { FormInput } from "../FormInput/FormInput";
import { SubmitButton } from "../SubmitButton/SubmitButton";

export const SignUp = () => {
  return (
    <div className="sign-up">
      <Logo className="sign-up__logo" />

      <h1 className="sign-up__title">Добро пожаловать!</h1>

      <form action="" className="sign-up__form">
        <div className="sign-up__form-inputs">
          <FormInput
            label="Имя"
            id="name"
            name="name"
            placeholder="Введите имя"
            required
            className="sign-up__name-input"
          />

          <FormInput
            label="E-mail"
            id="email"
            name="email"
            placeholder="Введите e-mail"
            required
            className="sign-up__email-input"
          />

          <FormInput
            label="Пароль"
            id="password"
            name="password"
            placeholder="Введите пароль"
            className="sign-up__password"
            required
          />
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
