import { useEffect } from "react";
import { Navigate, NavLink } from "react-router-dom";
import Form from "../Form/Form";
import { FormHeader } from "../FormHeader/FormHeader";
import { FormInput } from "../FormInput/FormInput";
import { useFormWithValidation } from "../../hooks/useFormWithValidation";
import { USER_NAME_VALIDATION } from "../../constants/validation";

export const SignUp = ({ isLogged, errorText, onReset, onSubmit }) => {
  const { values, isValid, handleChange, errors, setIsValid } =
    useFormWithValidation();

  const { name, email, password } = values;

  const isRequiredFieldsError =
    !isValid && (!name?.length || !email?.length || !password?.length);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsValid(true);

    if (!name?.length || !email?.length || !password?.length) {
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
    <main className="sign-up">
      <section className="sign-up__wrapper">
        <FormHeader
          title="Добро пожаловать!"
          showLogo={true}
          className="sign-up__header"
        />

        <Form
          buttonText={"Зарегистрироваться"}
          isValid={isValid}
          className="sign-up__form"
          formError={""}
          btnDisabled={!isValid}
          errorText={errorText}
          isRequiredFieldsError={isRequiredFieldsError}
          onSubmit={handleSubmit}
        >
          <FormInput
            id="name"
            value={name || ""}
            errorText={errors.name}
            required
            pattern={USER_NAME_VALIDATION}
            name="name"
            label="Имя"
            minLength="2"
            maxLength="30"
            placeholder="Введите имя"
            className="sign-up__name-input"
            onChange={(e) => handleChange(e)}
          />

          <FormInput
            id="email"
            value={email || ""}
            errorText={errors.email}
            required
            name="email"
            type="email"
            label="E-mail"
            placeholder="Введите e-mail"
            className="sign-up__email-input"
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
            placeholder="Введите пароль"
            minLength="2"
            maxLength="30"
            className="sign-up__password-input"
            onChange={(e) => handleChange(e)}
          />
        </Form>

        <div className="sign-up__navigation">
          <span>Уже зарегистрированы?</span>
          <NavLink className="sign-up__sign-in-link" to="/signin">
            Войти
          </NavLink>
        </div>
      </section>
    </main>
  );
};
