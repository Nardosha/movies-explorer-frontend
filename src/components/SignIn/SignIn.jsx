import { useEffect } from "react";
import { Navigate, NavLink } from "react-router-dom";
import Form from "../Form/Form";
import { FormHeader } from "../FormHeader/FormHeader";
import { FormInput } from "../FormInput/FormInput";
import { useFormWithValidation } from "../../hooks/useFormWithValidation";

export const SignIn = ({ isLogged, errorText, onReset, onSubmit }) => {
  const { values, isValid, handleChange, errors, setIsValid } =
    useFormWithValidation();

  const { email, password } = values;

  const isRequiredFieldsError =
    !isValid && (!email?.length || !password?.length);

  const onFormSubmit = async (e) => {
    e.preventDefault();

    setIsValid(true);

    if (!email?.length || !password?.length) {
      setIsValid(false);

      return;
    }

    onSubmit(values);
  };

  useEffect(() => {
    onReset();
  }, []);

  return isLogged ? (
    <Navigate to="/" replace />
  ) : (
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
          isRequiredFieldsError={isRequiredFieldsError}
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
