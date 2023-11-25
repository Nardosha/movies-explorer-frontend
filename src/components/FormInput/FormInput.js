export const FormInput = ({
  name,
  label,
  placeholder,
  required,
  className,
}) => {
  return (
    <div className={`form-input ${className}`}>
      <label htmlFor={name} className="form-input__label">
        {label}
      </label>

      <input
        type="text"
        className="form-input__input"
        id={name}
        name={name}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};
