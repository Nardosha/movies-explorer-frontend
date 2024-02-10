export const SubmitButton = ({ text, className, disabled }) => {
  return (
    <button
      type="submit"
      className={`submit-button ${className}`}
      disabled={disabled}
    >
      {text}
    </button>
  );
};
