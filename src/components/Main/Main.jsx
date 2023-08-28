import { AboutProject } from "./AboutProject/AboutProject";
import { Promo } from "./Promo/Promo";
import { Techs } from "./Techs/Techs";
import { AboutMe } from "./AboutMe/AboutMe";

export const Main = () => {
  return (
    <div className="main">
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
    </div>
  );
};
