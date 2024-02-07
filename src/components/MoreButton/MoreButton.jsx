export const MoreButton = ({ className, onClick }) => {
  return (
    <button className={`more-button ${className}`} type="button" onClick={onClick}>
      Ещё
    </button>
  );
};
