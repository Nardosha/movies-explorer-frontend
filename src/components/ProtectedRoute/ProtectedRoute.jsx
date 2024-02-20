import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ path,isLogged,  element: Component, ...props }) => {
  return isLogged ? (
    <Component {...props} />
  ) : (
    <Navigate to="/" replace />
  );
};
