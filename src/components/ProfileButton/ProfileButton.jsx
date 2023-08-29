import { NavLink } from "react-router-dom";

export const ProfileButton = () => {
  return (
    <NavLink
      className={(state) =>
        state.isActive
          ? "profile-button profile-button_active"
          : "profile-button"
      }
      to="me"
    >
      Аккаунт
    </NavLink>
  );
};
