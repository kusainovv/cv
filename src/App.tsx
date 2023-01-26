import React from "react";
import { Navigation } from "./components/common/Navigation";
import { Greeting } from "./components/sections/greeting/Greeting";
import { GreetingBurgerMenu } from "./components/sections/greeting/GreetingBurgerMenu";

export const App = () => {
  return <>
    <Greeting />
  
    <Navigation />
  
    <GreetingBurgerMenu />
  </>
}