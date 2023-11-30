import { Separator } from "../../Separator/Separator";
import { NavigationLink } from "../../NavigationLink/NavigationLink";
import { Links, NavigationTitles } from "../../../utils/constants";
import { Link } from "react-router-dom";

export const AboutMe = () => {
  return (
    <section className="about-me">
      <h2 className="about-me__title">Студент</h2>
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

          <NavigationLink
            title={Links.GITHUB}
            to="https://github.com/Nardosha"
            target="_blank"
            className="about-me__link"
          />
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
          <NavigationLink
            title={Links.STATIC_WEBSITE}
            to="#"
            target="_blank"
            className="about-me__portfolio-link"
          />
        </li>
        <Separator className="about-me__link-separator" />

        <li className="about-me__list-item">
          <NavigationLink
            title={Links.ADAPTIVE_WEBSITE}
            to="#"
            target="_blank"
            className="about-me__portfolio-link"
          />
        </li>
        <Separator className="about-me__link-separator" />

        <li className="about-me__list-item">
          <NavigationLink
            title={Links.SPA}
            to="#"
            target="_blank"
            className="about-me__portfolio-link"
          />
        </li>
      </ul>
    </section>
  );
};
