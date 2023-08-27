import { Navigate } from "react-router-dom";

export const NotFoundPage = () => {
  return (
    <>
      <h1>404</h1>
      <div>Страница не найдена</div>
      <Navigate to="/" replace>
        Назад
      </Navigate>
    </>
  );
};
