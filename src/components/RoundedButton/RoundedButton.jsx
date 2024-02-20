export const RoundedButton = ({ title, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`rounded-button  rounded-button_active ${className}`}
    >
      {title}
    </button>
  );
};
