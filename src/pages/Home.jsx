import React from "react";
import Blogs from "../components/Blogs";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Members from "../components/Members";
import SectionDivider from "../components/SectionDivider";
import Trending from "../components/Trending";
import Footer from "../components/footer/Footer";

const Home = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <Trending />
      <Blogs />
      <Members />
      <Contact />
    </div>
  );
};

export default Home;
