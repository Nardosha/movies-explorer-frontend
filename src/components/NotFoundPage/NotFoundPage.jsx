import { NavLink } from "react-router-dom";

export const NotFoundPage = () => {
  return (
    <main className="not-found-page">
      <div className="not-found-page__container">
        <h1 className="not-found-page__title">404</h1>
        <p className="not-found-page__subtitle">Страница не найдена</p>
      </div>

      <NavLink to="/" replace className="not-found-page__link-back">
        Назад
      </NavLink>
    </main>
  );
};
