import { AboutProject } from "./AboutProject/AboutProject";
import { Techs } from "./Techs/Techs";
import { AboutMe } from "./AboutMe/AboutMe";
import { Hero } from "./Hero/Hero";

export const Home = () => {
  return (
    <main className="home">
      <Hero />
      <AboutProject id="about-project" />
      <Techs id="techs" />
      <AboutMe id="about-me" />
    </main>
  );
};
