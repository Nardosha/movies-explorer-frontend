import { useCallback, useState } from "react";
import isEmail from "validator/es/lib/isEmail";
import {CUSTOM_USER_EMAIL_VALIDATION_TEXT, CUSTOM_USER_NAME_VALIDATION_TEXT} from "../constants/validation";

export const useFormWithValidation = () => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(true);

  const handleChange = ({ target }) => {
    const { name, value } = target;

    target.setCustomValidity("");

    if (name === "name" && target.validity.patternMismatch) {
      target.setCustomValidity(CUSTOM_USER_NAME_VALIDATION_TEXT);
    }

    if (name === "email" && !isEmail(value)) {
      target.setCustomValidity(CUSTOM_USER_EMAIL_VALIDATION_TEXT);
    }

    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });
    setIsValid(target.closest("form").checkValidity());
  };
  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid],
  );

  return {
    values,
    handleChange,
    errors,
    isValid,
    resetForm,
    setValues,
    setIsValid,
  };
};
