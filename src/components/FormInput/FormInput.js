export const FormInput = ({
  name,
  type = "text",
  label,
  placeholder,
  required,
  className,
  hasError,
}) => {
  return (
    <div className={`form-input ${className}`}>
      <label htmlFor={name} className="form-input__label">
        {label}
      </label>

      <input
        type={type}
        className={`form-input__input ${
          hasError ? "form-input__input_error" : ""
        }`}
        id={name}
        name={name}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};
