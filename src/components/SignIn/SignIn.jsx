import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Logo } from "../Logo/Logo";
import { FormInput } from "../FormInput/FormInput";
import { useFormWithValidation } from "../../hooks/useFormWithValidation";
import Form from "../Form/Form";

export const SignIn = ({ onSubmit }) => {
  const { values, isValid, handleChange, errors } = useFormWithValidation();
  const { email, password } = values;

  const onFormSubmit = async (e) => {
    e.preventDefault();
    console.log(values);
    await onSubmit(values);
  };

  return (
    <main className="sign-in">
      <section className="sign-in__wrapper">
        <Logo className="sign-in__logo" />

        <h1 className="sign-in__title">Рады видеть!</h1>

        <Form
          title={"Вход"}
          buttonText={"Войти"}
          isValid={isValid}
          className="sign-in__form"
          formError={""}
          onSubmit={onFormSubmit}
        >
          <FormInput
            label="E-mail"
            type="email"
            id="email"
            name="email"
            placeholder="Введите e-mail"
            className="form__input sign-in__email-input"
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
            className="form__input sign-in__password-input"
            minLength="2"
            maxLength="30"
            required
            value={password || ""}
            onChange={(e) => handleChange(e)}
          />
        </Form>

        <div className="sign-in__navigation">
          <span>Ещё не зарегистрированы?</span>
          <NavLink className="sign-in__sign-up-link" to="/signup">
            Регистрация
          </NavLink>
        </div>
      </section>
    </main>
  );
};
