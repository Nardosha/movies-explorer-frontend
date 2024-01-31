export const AboutProject = ({id, className}) => {
  return (
    <div id={id} className={`about-project ${className}`}>
      <h2 className="about-project__title">О проекте</h2>

      <ul className="about-project__list">
        <li className="about-project__list-item">
          <h3 className="about-project__item-title">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="about-project__item-description">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </li>

        <li className="about-project__list-item">
          <h3 className="about-project__item-title">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="about-project__item-description">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </li>
      </ul>

      <ul className="about-project__scheme">
        <li className="about-project__scheme-row">
          <p className="about-project__scheme-item about-project__scheme-item_primary-colored">
            1 неделя
          </p>
          <p className="about-project__scheme-item about-project__scheme-item_colored">
            4 недели
          </p>
        </li>
        <li className="about-project__scheme-row">
          <p className="about-project__scheme-item">Back-end</p>
          <p className="about-project__scheme-item">Front-end</p>
        </li>
      </ul>
    </div>
  );
};
