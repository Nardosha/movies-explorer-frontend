import { AboutProject } from "../AboutProject/AboutProject";
import { Techs } from "../Techs/Techs";
import { AboutMe } from "../AboutMe/AboutMe";
import { Hero } from "../Hero/Hero";

export const Promo = () => {
  return (
    <div className="promo">
      <Hero />
      <AboutProject id="about-project" className="promo__about-project"/>
      <Techs id="techs"/>
      <AboutMe id="about-me"/>
    </div>
  );
};
