import { NavLink } from "react-router-dom";
import { Logo } from "../Logo/Logo";
import { FormInput } from "../FormInput/FormInput";
import { SubmitButton } from "../SubmitButton/SubmitButton";
import { useFormWithValidation } from "../../hooks/useFormWithValidation";

export const SignUp = ({ onSubmit }) => {
  const { values, isValid, handleChange, errors } = useFormWithValidation();
  const { name, email, password } = values;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(values);
  };
  return (
    <main className="sign-up">
      <Logo className="sign-up__logo" />

      <h1 className="sign-up__title">Добро пожаловать!</h1>

      <form action="#" className="sign-up__form" onSubmit={handleSubmit}>
        <div className="sign-up__form-inputs">
          <FormInput
            label="Имя"
            id="name"
            name="name"
            placeholder="Введите имя"
            required
            className="sign-up__name-input"
            minLength="2"
            maxLength="30"
            value={name || ""}
            onChange={(e) => handleChange(e)}
          />

          <FormInput
            label="E-mail"
            id="email"
            name="email"
            type="email"
            placeholder="Введите e-mail"
            className="sign-up__email-input"
            required
            value={email || ""}
            onChange={(e) => handleChange(e)}
          />

          <FormInput
            label="Пароль"
            id="password"
            name="password"
            type="password"
            placeholder="Введите пароль"
            className="sign-up__password-input"
            minLength="2"
            maxLength="30"
            required
            value={password || ""}
            onChange={(e) => handleChange(e)}
          />

          <div className="sign-up__error-message form__input-error">
            {errors.password}
          </div>
        </div>

        <SubmitButton
          text="Зарегистрироваться"
          disabled={!isValid}
          className="sign-up__submit-button"
        />
      </form>

      <div className="sign-up__navigation">
        <span>Уже зарегистрированы?</span>
        <NavLink className="sign-up__sign-in-link" to="/signin">
          Войти
        </NavLink>
      </div>
    </main>
  );
};
