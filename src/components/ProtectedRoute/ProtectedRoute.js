import { Navigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import { useContext } from "react";

export const ProtectedRoute = ({ path, element: Component, ...props }) => {
  const { isLogged } = useContext(UserContext);

  return isLogged ? (
    <Component {...props} />
  ) : (
    <Navigate to="/signin" replace />
  );
};
