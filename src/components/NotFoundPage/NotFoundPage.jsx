import { useNavigate } from "react-router-dom";

export const NotFoundPage = () => {
  const navigate = useNavigate();

  function goBack() {
    navigate(-1);
  }
  return (
    <main className="not-found-page">
      <div className="not-found-page__container">
        <h1 className="not-found-page__title">404</h1>
        <p className="not-found-page__subtitle">Страница не найдена</p>
      </div>

      <button href="#" className="not-found-page__link-back" onClick={goBack}>
        Назад
      </button>
    </main>
  );
};
