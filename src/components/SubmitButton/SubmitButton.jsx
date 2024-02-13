export const SubmitButton = ({ text, className, disabled }) => {
  return (
    <button
      type="submit"
      className={`submit-button ${className ? className : ""} ${
        disabled ? "submit-button_state_disabled" : ""
      }`}
      disabled={disabled}
    >
      {text}
    </button>
  );
};
