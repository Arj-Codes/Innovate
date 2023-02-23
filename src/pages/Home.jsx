import React from "react";
import Blogs from "../components/Blogs";
import Hero from "../components/Hero";
import SectionDivider from "../components/SectionDivider";
import Trending from "../components/Trending";
import Footer from "../components/footer/Footer";

const Home = () => {
  return (
    <div className="flex flex-col gap-10">
      <Hero />
      <Trending />
      <Blogs />
      <SectionDivider />
    </div>
  );
};

export default Home;
