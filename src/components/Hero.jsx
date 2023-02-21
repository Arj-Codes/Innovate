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
    <section id="Hero" className="h-[100vh]">
      <div className=" w-[100vw] sm:w-[85vw] h-full mx-auto flex justify-around items-center">
        <div className="title flex flex-col">
          {title.map((t, idx) => {
            const Icon = iconsArray[t.id];

            return (
              <motion.div
                className={`flex items-center my-2 ${idx === 1 ? "ml-10" : ""}`}
                animate={{ x: [-200, 0] }}
                transition={{ duration: 1 }}
                key={idx}
              >
                <motion.h1
                  className={` text-4xl sm:text-6xl font-bold ${
                    idx === 0
                      ? "text-orange-400"
                      : idx === 1
                      ? "text-white"
                      : "text-green-400"
                  }`}
                  style={{ textShadow: "0px 0px 4px black" }}
                  key={t.id}
                  whileHover={{
                    scale: 1.02,
                    textShadow: "1px 1px 8px #1c60c5",
                    cursor: "pointer",
                  }}
                >
                  {t.text}

                  <Icon
                    style={{
                      fontSize: "4rem",
                    }}
                    className={`${
                      idx === 0
                        ? "glowing-bulb"
                        : idx === 1
                        ? "think"
                        : "pencil"
                    }`}
                  />
                </motion.h1>
              </motion.div>
            );
          })}
        </div>
        <div
          className="trial h-[50vh] relative flex items-center rounded-tl-full rounded-br-full rounded-tr-lg"
          id="hero__right"
        >
          <motion.div
            className="para w-[40vw] text-white flex flex-col h-[30vh] justify-between p-[1rem]"
            animate={{ y: [-200, 0] }}
            transition={{ duration: 1 }}
            style={{ textShadow: "0px 0px 4px black" }}
          >
            <p className="text-2xl font-bold tracking-wide">
              "Discovering the World, One Word at a Time."
            </p>
            <p className=" hidden sm:block text-md font-semibold">
              Welcome to our blog, a place where words come to life and inspire
              the curious mind. Our mission is to create a space where you can
              escape the daily routine and expand your horizons. From travel to
              technology, food to fashion, we strive to bring you the latest and
              most interesting topics, written with passion and insights.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
