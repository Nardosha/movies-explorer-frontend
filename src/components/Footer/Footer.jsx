import { Separator } from "../Separator/Separator";
import { NavigationLink } from "../NavigationLink/NavigationLink";

export const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__description">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <Separator className="footer__separator" />

      <div className="footer__list-info">
        <ul className="footer__link-list">
          <li className="footer__list-item">
            <NavigationLink
              title="Яндекс.Практикум"
              target="_blank"
              to="https://practicum.yandex.ru/profile/frontend-developer/"
              className="footer__link"
            />
          </li>

          <li className="footer__list-item">
            <NavigationLink
              to="https://github.com/Nardosha"
              className="footer__link"
              title="Github"
              target="_blank"
            />
          </li>
        </ul>

        <p className="footer__copyright">©2020</p>
      </div>
    </footer>
  );
};
