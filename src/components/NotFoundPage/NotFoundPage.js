import { Link } from "react-router-dom";

export const NotFoundPage = () => {
  return (
    <>
      <h1>404</h1>
      <div>Страница не найдена</div>
      <Link>Назад</Link>
    </>
  );
};
