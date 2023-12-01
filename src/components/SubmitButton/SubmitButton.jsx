export const SubmitButton = ({ text, className }) => {
  return (
    <button type="submit" className={`submit-button ${className}`}>
      {text}
    </button>
  );
};
