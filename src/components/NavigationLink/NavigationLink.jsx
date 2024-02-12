import { NavLink } from "react-router-dom";

export const NavigationLink = ({ to, title, className, target = "_self" , closeMenu}) => {
  return (
    <NavLink to={to} className={`navigation-link ${className}`} target={target}  onClick={closeMenu}>
      {title}
    </NavLink>
  );
};
