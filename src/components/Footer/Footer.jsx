import { Separator } from "../Separator/Separator";

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
            <a href="#" className="footer__link">
              Яндекс.Практикум
            </a>
          </li>

          <li className="footer__list-item">
            <a href="#" className="footer__link">
              Github
            </a>
          </li>
        </ul>

        <p className="footer__copyright">©2020</p>
      </div>
    </footer>
  );
};
