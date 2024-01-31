export const Techs = ({id}) => {
  return (
    <section id={id} className="techs">
      <h2 className="techs__title">Технологии</h2>

      <h2 className="techs__caption">7 технологий</h2>

      <h2 className="techs__description">
        На курсе веб-разработки мы освоили технологии, которые применили в
        дипломном проекте.
      </h2>

      <ul className="techs__list">
        <li className="techs__list-item">HTML</li>
        <li className="techs__list-item">CSS</li>
        <li className="techs__list-item">JS</li>
        <li className="techs__list-item">React</li>
        <li className="techs__list-item">Git</li>
        <li className="techs__list-item">Express.js</li>
        <li className="techs__list-item">mongoDB</li>
      </ul>
    </section>
  );
};
