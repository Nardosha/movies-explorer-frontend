import { NavLink } from "react-router-dom";

export const LoginButton = () => {
  return (
    <NavLink
      className={(state) =>
        state.isActive
          ? "login-button login-button_active"
          : "login-button"
      }
      to="signin"
    >
      Войти
    </NavLink>
  );
};
