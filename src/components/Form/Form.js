import React from "react";
import { SubmitButton } from "../SubmitButton/SubmitButton";

const Form = ({
  onSubmit,
  name,
  children,
  isValid,
  buttonText,
  btnDisabled,
  btnClassName,
  formError,
  className,
}) => {
  return (
    <form
      onSubmit={onSubmit}
      action="#"
      className={`form ${className}`}
      name={name}
      noValidate
    >
      <fieldset className="form__inputs">
        {children}

        <div className="form__error">{formError}</div>
      </fieldset>
      <SubmitButton
        text={buttonText}
        className="form__submit-button"
        disabled={!isValid || btnDisabled}
      />
    </form>
  );
};

export default Form;
