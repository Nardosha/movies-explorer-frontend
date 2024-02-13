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
  errorText,
  successText,
  className,
  isEdit = true,
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

        {errorText && <div className="form__error">{errorText}</div>}
        {successText && <div className="form__success">{successText}</div>}
      </fieldset>

      {isEdit && (
        <SubmitButton
          text={buttonText}
          className={`form__submit-button ${btnClassName}`}
          disabled={!isValid || btnDisabled}
        />
      )}
    </form>
  );
};

export default Form;
