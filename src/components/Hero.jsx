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
    <section id="Hero" className="flex h-[90vh] w-full rounded-3xl mx-auto justify-center">
      <div className="wrapper flex items-center justify-evenly w-[80vw]">
        <div className="left">
          <img
            src="./heromain.png"
            alt=""
            className="rounded-3xl w-[35vw] h-[50vh]"
          />
        </div>
        <div className="right bg-[#201d1d] rounded-3xl">
          <img
            src="./logoicon.jpeg"
            alt=""
            className="logoicon rounded-3xl w-[25vw]"
          />
          <div className="text text-white flex flex-col text-3xl gap-3 items-center my-5">
            <h1 className="text-white">
              Write what <span className="text-[#ff00f2]">matters</span> to{" "}
            </h1>
            <h1>you, and let others be</h1>
            <div className="lastline flex w-[80%] justify-evenly">
              <h1 className="text-[#ff00f2]">moved.</h1>
              <button className="bg-[#ff00f2] rounded-3xl p-2 text-xl font-bold text-black hover:text-[#ff00f2] hover:cursor-pointer hover:bg-black hover:border hover:border-[#ff00f2] transition ease-in-out duration-300">
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
