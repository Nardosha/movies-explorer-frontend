export const FormInput = ({
  name,
  type = "text",
  label,
  placeholder,
  required,
  className,
  minLength = undefined,
  maxLength = undefined,
  value,
  errorText,
  pattern,
  onChange,
}) => {
  return (
    <div className={`form-input ${className}`}>
      <label htmlFor={name} className="form-input__label">
        {label}
      </label>

      <input
        id={name}
        name={name}
        value={value}
        type={type}
        placeholder={placeholder}
        required={required}
        minLength={minLength}
        maxLength={maxLength}
        onChange={onChange}
        pattern={pattern}
        className="form-input__input"
      />

      {errorText && (
        <span
          id="input-name-error"
          className="form__input-title-error form__input-error"
        >
          {errorText}
        </span>
      )}
    </div>
  );
};
