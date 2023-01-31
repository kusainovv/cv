import React from "react";
import { Navigation } from "./components/common/Navigation";
import { Greeting } from "./components/sections/greeting/Greeting";
import { GreetingBurgerMenu } from "./components/sections/greeting/GreetingBurgerMenu";
import { RootStoreProvider } from "./store/provider/RootStoreProvider";

export const App = () => {
  return <RootStoreProvider>
    <Greeting />
  
    <Navigation />
  
    <GreetingBurgerMenu />
  </RootStoreProvider>
}