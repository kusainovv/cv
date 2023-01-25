import React from "react";
import { Navigation } from "./components/common/Navigation";
import { Greeting } from "./components/sections/greeting/Greeting";

export const App = () => {
  return <>
    <Greeting />
  
    <Navigation />
  </>
}