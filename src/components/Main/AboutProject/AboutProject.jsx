import { Separator } from "../../Separator/Separator";

export const AboutProject = ({className}) => {
  return (
    <div className={`about-project ${className}`}>
      <h2 className="about__title">О проекте</h2>
      <Separator className="about__separator" />

      <ul className="about__list">
        <li className="about__list-item">
          <h3 className="about__item-title">
            Дипломный проект включал 5 этапов
          </h3>
          <span className="about__item-description">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </span>
        </li>

        <li className="about__list-item">
          <h3 className="about__item-title">
            Дипломный проект включал 5 этапов
          </h3>
          <span className="about__item-description">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </span>
        </li>
      </ul>

      <ul className="about__scheme">
        <li className="about__scheme-row">
          <div className="about__scheme-item about__scheme-item_primary-colored">
            1 неделя
          </div>
          <div className="about__scheme-item about__scheme-item_colored">
            2 недели
          </div>
        </li>
        <li className="about__scheme-row">
          <div className="about__scheme-item">Back-end</div>
          <div className="about__scheme-item">Front-end</div>
        </li>
      </ul>
    </div>
  );
};
