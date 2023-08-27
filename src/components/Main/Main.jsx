import { AboutProject } from "./AboutProject/AboutProject";
import { Promo } from "./Promo/Promo";
import { Techs } from "./Techs/Techs";
import { AboutMe } from "./AboutMe/AboutMe";
import { Movies } from "../Movies/Movies";

export const Main = ({ isLogged }) => {
  console.log("isLogged", isLogged);
  return isLogged ? (
    <Movies />
  ) : (
    <div>
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
    </div>
  );
};
