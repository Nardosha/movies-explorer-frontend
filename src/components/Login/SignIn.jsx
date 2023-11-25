import { NavLink } from "react-router-dom";
import { Logo } from "../Logo/Logo";
import { FormInput } from "../FormInput/FormInput";
import { SubmitButton } from "../SubmitButton/SubmitButton";

export const SignIn = () => {
  return (
    <div className="sign-in">
      <Logo className="sign-in__logo" />

      <h1 className="sign-in__title">Рады видеть!</h1>

      <form action="" className="sign-in__form">
        <div className="sign-in__form-inputs">
          <FormInput
            label="E-mail"
            id="email"
            name="email"
            placeholder="Введите e-mail"
            required
            className="sign-in__email-input"
          />

          <FormInput
            label="Пароль"
            id="password"
            name="password"
            placeholder="Введите пароль"
            className="sign-in__password"
            required
          />
        </div>

        <SubmitButton text="Войти" className="sign-in__submit-button" />
      </form>

      <div className="sign-in__navigation">
        <span>Ещё не зарегистрированы?</span>
        <NavLink className="sign-in__sign-up-link" to="/signup">
          Регистрация
        </NavLink>
      </div>
    </div>
  );
};
