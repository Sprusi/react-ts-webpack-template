import React from "react";
import Navigation from "./navigation/Navigation";
import { BrowserRouter } from "react-router-dom";

export const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
    </BrowserRouter>
  );
};
export default App;
