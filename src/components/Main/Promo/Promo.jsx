import { AboutProject } from "../AboutProject/AboutProject";
import { Techs } from "../Techs/Techs";
import { AboutMe } from "../AboutMe/AboutMe";
import { NavTab } from "../NavTab/NavTab";
import { Hero } from "../Hero/Hero";

export const Promo = () => {
  return (
    <div>
      <Hero />
      <AboutProject />
      <Techs />
      <AboutMe />
    </div>
  );
};
