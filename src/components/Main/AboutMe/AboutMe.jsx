import { Separator } from "../../Separator/Separator";

export const AboutMe = () => {
  return (
    <section className="about-me">
      <h2 className="about-me__title">О проекте</h2>
      <Separator className="about-me__separator" />

      <div className="about-me__container-info">
        <div className="about-me__info">
          <h3 className="about-me__name">Виталий</h3>
          <p className="about-me__profession">Фронтенд-разработчик, 27 лет</p>
          <p className="about-me__description">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <a className="about-me__link" href="#">
            Githab
          </a>
        </div>

        <img
          className="about-me__photo"
          src={require("../../../images/promo/about-me/student-photo.jpg")}
          alt="Фотография студента"
        />
      </div>

      <p className="about-me__portfolio">Портфолио</p>

      <ul className="about-me__portfolio-list">
        <li className="about-me__list-item">
          <a href="#" className="about-me__portfolio-link">
            <span className="about-me__link-text">Статичный сайт</span>
            <span className="about-me__link-icon">↗</span>
          </a>
        </li>
        <Separator className="about-me__link-separator" />

        <li className="about-me__list-item">
          <a href="#" className="about-me__portfolio-link">
            <span className="about-me__link-text">Адаптивный сайт</span>
            <span className="about-me__link-icon">↗</span>
          </a>
        </li>
        <Separator className="about-me__link-separator" />

        <li className="about-me__list-item">
          <a href="#" className="about-me__portfolio-link">
            <span className="about-me__link-text">
              Одностраничное приложение
            </span>
            <span className="about-me__link-icon">↗</span>
          </a>
        </li>
      </ul>
    </section>
  );
};
