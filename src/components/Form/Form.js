import React from "react";
import { SubmitButton } from "../SubmitButton/SubmitButton";

const Form = ({
  title,
  onSubmit,
  name,
  children,
  isValid,
  buttonText,
  btnDisabled,
  btnClassName,
  className,
}) => {
  return (
    // <div className="form__container">
    <form
      onSubmit={onSubmit}
      action="#"
      className={`form ${className}`}
      name={name}
      noValidate
    >
      <fieldset className="form__inputs">{children}</fieldset>
      <SubmitButton
        text={buttonText}
        className="form__submit-button"
        disabled={!isValid || btnDisabled}
      />
    </form>
    // </div>
  );
};

export default Form;
