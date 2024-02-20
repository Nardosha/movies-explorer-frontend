import React from "react";
import { SubmitButton } from "../SubmitButton/SubmitButton";
import { REQUIRED_FIELDS_VALIDATION_TEXT } from "../../constants/validation";

const Form = ({
  onSubmit,
  name,
  children,
  isValid,
  buttonText,
  btnDisabled,
  btnClassName,
  errorText,
  isRequiredFieldsError,
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

        <div className="form__valid-status">
          {errorText && <div className="form__error">{errorText}</div>}

          {isRequiredFieldsError && (
            <div className="form__error">{REQUIRED_FIELDS_VALIDATION_TEXT}</div>
          )}

          {successText && <div className="form__success">{successText}</div>}
        </div>
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
