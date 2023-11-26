import { NavLink } from "react-router-dom";

export const ProfileButton = ({ className }) => {
  return (
    <NavLink
      className={(state) =>
        state.isActive
          ? `profile-button  profile-button_active ${className}`
          : `profile-button ${className}`
      }
      to="me"
    >
      Аккаунт
    </NavLink>
  );
};
