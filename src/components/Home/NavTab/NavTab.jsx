export const NavTab = () => {
  return (
    <nav className="nav-tab">
      <ul className="nav-tab__list">
        <li className="nav-tab__list-item">
          <a href="#about-project" className="nav-tab__link">
            О проекте
          </a>
        </li>
        <li className="nav-tab__list-item">
          <a href="#techs" className="nav-tab__link">
            Технологии
          </a>
        </li>
        <li className="nav-tab__list-item">
          <a href="#about-me" className="nav-tab__link">
            Студент
          </a>
        </li>
      </ul>
    </nav>
  );
};
