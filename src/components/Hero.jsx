import CreateIcon from "@mui/icons-material/Create";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import PsychologyIcon from "@mui/icons-material/Psychology";
import { motion, useScroll } from "framer-motion";
import React, { useEffect, useState } from "react";
import { GiShipWheel } from "react-icons/gi";

const iconsArray = [LightbulbIcon, PsychologyIcon, CreateIcon];

const Hero = () => {
  const title = [
    { id: 0, text: "Think" },
    { id: 1, text: "Innovate" },
    { id: 2, text: "Write" },
  ];

  return (
    <section id="Hero" className="flex justify-evenly">
      <div className="left">'
      <div className="leftwrapper relative w-[35vw]">
        <div className="lefttop absolute right-0 top-4">
          <video src="./hero.mp4" className="w-[34vw] rounded-3xl"></video>
        </div>
        <div className="leftbottom text-white h-[70vh] w-[32vw] flex flex-col justify-end rounded-3xl p-2 gap-5 font-bold bg-[#1b1a1a]">
          <h1 className="text-4xl mx-auto">BlogerBase</h1>
          <p className="text-xl">A platform for all the humble hackers out there!</p>
        </div>
      </div>
      </div>
      <div className="right">'
      <div className="rightwrapper relative w-[35vw]">
        <div className="top absolute top-4">
          <video src="./hero.mp4" className="w-[34vw] rounded-3xl"></video>
        </div>
        <div className="rightbottom text-white h-[70vh] w-[32vw] flex flex-col justify-end rounded-3xl p-2 gap-5 font-bold bg-[#1b1a1a] absolute right-0">
          <h1 className="text-4xl mx-auto">BlogerBase</h1>
          <p className="text-xl">A platform for all the humble hackers out there!</p>
        </div>
      </div>
      </div>

    </section>
  );
};

export default Hero;
