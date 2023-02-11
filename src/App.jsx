import React from "react";
import { BrowserRouter } from "react-router-dom";
import Blog from "./components/Blog";
import Home from "./components/Home";

const App = () => {
  return (
      <div className="flex flex-col gap-5">
        <Home />
        <Blog />
      </div>
  );
};

export default App;
