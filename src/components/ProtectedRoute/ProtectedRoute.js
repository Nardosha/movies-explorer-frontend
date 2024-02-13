import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ path, element: Component, ...props }) => {
  return props.isLogged ? (
    <Component {...props} />
  ) : (
    <Navigate to="/" replace />
  );
};
