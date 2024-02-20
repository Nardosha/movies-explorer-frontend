import { NavigationLink } from "../../NavigationLink/NavigationLink";
import {Links} from "../../../constants/movies";

export const AboutMe = ({ id }) => {
  return (
    <section id={id} className="about-me">
      <h2 className="about-me__title">Студент</h2>

      <div className="about-me__container-info">
        <div className="about-me__info">
          <h3 className="about-me__name">Натали</h3>
          <p className="about-me__profession">Фронтенд-разработчица, 27 лет</p>
          <p className="about-me__description">
           Родом из Сибири из города Стрежевой. По образованию я инженер-геолог, в душе разработчица!
              Еще люблю видеоигры и йогу! Было интересно выучиться в Яндекс Практикум на веб-разработке, следующая цель
              - курс на мидла!
          </p>

          <NavigationLink
            title={Links.GITHUB.TITLE}
            to={Links.GITHUB.LINK}
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
            title={Links.STATIC_WEBSITE.TITLE}
            to={Links.STATIC_WEBSITE.LINK}
            target="_blank"
            className="about-me__portfolio-link"
          />

        </li>

        <li className="about-me__list-item">
          <NavigationLink
            title={Links.ADAPTIVE_WEBSITE.TITLE}
            to={Links.ADAPTIVE_WEBSITE.LINK}
            target="_blank"
            className="about-me__portfolio-link"
          />

        </li>

        <li className="about-me__list-item">
          <NavigationLink
            title={Links.SPA.TITLE}
            to={Links.SPA.LINK}
            target="_blank"
            className="about-me__portfolio-link"
          />
        </li>
      </ul>
    </section>
  );
};
