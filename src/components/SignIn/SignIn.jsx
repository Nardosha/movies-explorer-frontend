import { NavLink } from "react-router-dom";
import { FormInput } from "../FormInput/FormInput";
import { useFormWithValidation } from "../../hooks/useFormWithValidation";
import Form from "../Form/Form";
import { FormHeader } from "../FormHeader/FormHeader";

export const SignIn = ({ errorText, onSubmit }) => {
  const { values, isValid, handleChange, errors } = useFormWithValidation();
  const { email, password } = values;

  const onFormSubmit = async (e) => {
    e.preventDefault();

    await onSubmit(values);
  };

  return (
    <main className="sign-in">
      <section className="sign-in__wrapper">
        <FormHeader
          title="Рады видеть!"
          showLogo={true}
          className="sign-in__header"
        />

        <Form
          title={"Вход"}
          buttonText={"Войти"}
          isValid={isValid}
          className="sign-in__form"
          formError={""}
          btnDisabled={!isValid}
          errorText={errorText}
          onSubmit={onFormSubmit}
        >
          <FormInput
            id="email"
            errorText={errors.email}
            value={email || ""}
            required
            name="email"
            type="email"
            label="E-mail"
            placeholder="Введите e-mail"
            className="form__input sign-in__email-input"
            onChange={(e) => handleChange(e)}
          />

          <FormInput
            id="password"
            value={password || ""}
            errorText={errors.password}
            required
            name="password"
            type="password"
            label="Пароль"
            minLength="2"
            maxLength="30"
            placeholder="Введите пароль"
            className="form__input sign-in__password-input"
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
