import { Logo } from "../Logo/Logo";

export const FormHeader = ({ title, showLogo, className }) => {
  return (
    <div className={`form-header ${className}`}>
      {showLogo && <Logo className="form-header__logo" />}

      <h1 className="form-header__title">{title}</h1>
    </div>
  );
};
