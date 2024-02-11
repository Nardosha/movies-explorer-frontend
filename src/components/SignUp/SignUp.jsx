import { NavLink } from "react-router-dom";
import { FormInput } from "../FormInput/FormInput";
import { useFormWithValidation } from "../../hooks/useFormWithValidation";
import Form from "../Form/Form";
import { FormHeader } from "../FormHeader/FormHeader";

export const SignUp = ({ onSubmit }) => {
  const { values, isValid, handleChange, errors } = useFormWithValidation();
  const { name, email, password } = values;

  const handleSubmit = (e) => {
    console.log("handleSubmit", e);
    e.preventDefault();
    onSubmit(values);
  };
  return (
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
          onSubmit={handleSubmit}
        >
          <FormInput
            id="name"
            value={name || ""}
            errorText={errors.name}
            required
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
