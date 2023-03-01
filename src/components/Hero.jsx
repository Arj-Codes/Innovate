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
    <section id="Hero" className="flex justify-evenly h-[100vh]">
      <
    </section>
  );
};

export default Hero;
