import { NavigationLink } from "../NavigationLink/NavigationLink";
import {Links} from "../../constants/movies";

export const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__description">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>

      <div className="footer__list-info">
        <ul className="footer__link-list">
          <li className="footer__list-item">
            <NavigationLink
              title={Links.YANDEX_PRACTICUM.TITLE}
              target="_blank"
              to={Links.YANDEX_PRACTICUM.LINK}
              className="footer__link"
            />
          </li>

          <li className="footer__list-item">
            <NavigationLink
              to={Links.GITHUB.LINK}
              className="footer__link"
              title={Links.GITHUB.TITLE}
              target="_blank"
            />
          </li>
        </ul>

        <p className="footer__copyright">©2020</p>
      </div>
    </footer>
  );
};
