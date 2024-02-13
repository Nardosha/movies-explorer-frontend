import { NavTab } from "../NavTab/NavTab";

export const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__container">
        <h1 className="hero__title">
          Учебный проект студента факультета Веб-разработки.
        </h1>
        <NavTab />
      </div>
    </section>
  );
};
