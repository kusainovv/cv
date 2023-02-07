import React from "react";
import { Navigation } from "./components/common/Navigation";
import { Biography } from "./components/sections/bio/Biography";
import { Greeting } from "./components/sections/greeting/Greeting";
import { GreetingBurgerMenu } from "./components/sections/greeting/GreetingBurgerMenu";
import { OtherProgramming } from "./components/sections/other_programming/OtherProgramming";
import { Projects } from "./components/sections/projects/Projects";
import { TechSkills } from "./components/sections/tech_skills/TechSkills";
import { RootStoreProvider } from "./store/provider/RootStoreProvider";

export const App = () => {
  return <RootStoreProvider>
    <Greeting />
    <Biography />
    <TechSkills />
    <Projects />
    <OtherProgramming />
  
    <Navigation />
  
    <GreetingBurgerMenu />
  </RootStoreProvider>
}