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
