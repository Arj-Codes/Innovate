import React from "react";
import { BrowserRouter } from "react-router-dom";
import Trending from "./components/Trending";
import Home from "./components/Home";
import Blogs from "./components/Blogs";

const App = () => {
  return (
      <div className="flex flex-col">
        <Home />
        <Trending />
        <Blogs />
      </div>
  );
};

export default App;
