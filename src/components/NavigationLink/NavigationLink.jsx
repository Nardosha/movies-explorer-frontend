import { NavLink } from "react-router-dom";

export const NavigationLink = ({ to, tittle, className, target = "_self" }) => {
  return (
    <NavLink to={to} className={`navigation-link ${className}`} target={target}>
      {tittle}
    </NavLink>
  );
};
