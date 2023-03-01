import { Scale } from "@mui/icons-material";
import CreateIcon from "@mui/icons-material/Create";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import PsychologyIcon from "@mui/icons-material/Psychology";
import { motion, useAnimation, useScroll } from "framer-motion";
import React, { useEffect, useState } from "react";
import { GiShipWheel } from "react-icons/gi";
import Iframe from "react-iframe";

const iconsArray = [LightbulbIcon, PsychologyIcon, CreateIcon];

const Hero = () => {
  const title = [
    { id: 0, text: "Think" },
    { id: 1, text: "Innovate" },
    { id: 2, text: "Write" },
  ];

  function VideoPlayer(props) {
    return (
      <div>
        <video controls={false} autoPlay loop className="w-[34vw] rounded-3xl">
          <source src={props.videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  }

  return (
    <section id="Hero" className="flex h-[100vh] w-full mx-auto justify-center">
      <video src="./stars.mp4" autoPlay loop muted className="vid" />
      <div className="wrapper flex sm:flex-row flex-col items-center justify-evenly  lg:w-[80vw] w-[100vw] z-20">
        <div className="left">
          <img
            src="./heromain.png"
            alt=""
            className="rounded-3xl w-auto sm:h-[50vh] h-[30vh]"
          />
        </div>
        <div className="right bg-[#201d1d] rounded-3xl p-1 sm:w-auto w-[70%] sm:h-auto h-[20%]">
          <img
            src="./logoicon.jpeg"
            alt=""
            className="logoicon rounded-3xl lg:w-[25vw] md:w-[35vw] sm:w-[40vw] w-[45vw]"
          />
          <div className="text text-white flex flex-col xl:text-3xl sm:text-2xl text-xl gap-3 items-center w-auto">
            <h1 className="text-white">
              Write what <span className="text-[#ff00f2]">matters</span> to{" "}
            </h1>
            <h1>you, and let others be</h1>
            <div className="lastline flex xl:w-[80%] w-[90%] justify-evenly">
              <h1 className="text-[#ff00f2]">moved.</h1>
              <button className="bg-[#ff00f2] rounded-3xl py-1 px-2 xl:text-xl sm:text-lg text-sm font-bold text-black hover:text-[#ff00f2] hover:cursor-pointer hover:bg-black hover:border hover:border-[#ff00f2] transition ease-in-out duration-300">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
