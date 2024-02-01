import logo from "../../images/icons/logo__COLOR_main-1-min.svg";
import { NavLink } from "react-router-dom";

export const Logo = ({ className }) => {
  return (
    <NavLink to="/" className={`logo ${className}`}>
      <img className="logo__img" src={logo} alt="Логотип" />
    </NavLink>
  );
};
