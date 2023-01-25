import React from "react";
import { Navigation } from "./components/common/Navigation";
import { Greeting } from "./components/sections/Greeting";

export const App = () => {
  return <>
    <Greeting />
  
    <Navigation />
  </>
}