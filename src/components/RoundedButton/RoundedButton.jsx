export const RoundedButton = ({ title, className }) => {
  return (
    <button
      className={`rounded-button  rounded-button_active ${className}`}
      type="button"
    >
      {title}
    </button>
  );
};
