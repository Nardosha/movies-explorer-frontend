import { Separator } from "../../Separator/Separator";

export const AboutMe = () => {
  return (
    <div className="about-me">
      <h2 className="about-me__title">О проекте</h2>
      <Separator />
      <img
        src="../../../images/promo/about-me/about-me__photo.jpg"
        alt="Фотография студента"
      />
      <h3 className="about-me__name">Наталия</h3>
      <div className="about-me__propfession">Фронтенд-разработчица, 27 лет</div>
      <div className="about-me__description">
        Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня
        есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно
        начал кодить. С 2015 года работал в компании «СКБ Контур». После того,
        как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и
        ушёл с постоянной работы.
      </div>

      <a className="about-me__link" href="#">
        Githab
      </a>
      <a className="about-me__portfolio" href="#">
        Портфолио
      </a>
    </div>
  );
};
