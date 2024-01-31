export const FormInput = ({
  name,
  type = "text",
  label,
  placeholder,
  required,
  className,
  minLength = undefined,
  maxLength = undefined,
}) => {
  return (
    <div className={`form-input ${className}`}>
      <label htmlFor={name} className="form-input__label">
        {label}
      </label>

      <input
        type={type}
        className="form-input__input"
        id={name}
        name={name}
        placeholder={placeholder}
        required={required}
        minLength={minLength}
        maxLength={maxLength}
      />
    </div>
  );
};
