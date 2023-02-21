import CreateIcon from "@mui/icons-material/Create";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import PsychologyIcon from "@mui/icons-material/Psychology";
import { motion, useScroll } from "framer-motion";
import React, { useEffect, useState } from "react";

const iconsArray = [LightbulbIcon, PsychologyIcon, CreateIcon];

const Hero = () => {
  const title = [
    { id: 0, text: "Think" },
    { id: 1, text: "Innovate" },
    { id: 2, text: "Write" },
  ];

  return (
    <section id="Hero">
      <div className=" w-[100vw] sm:w-[85vw] h-[90vh] mx-auto flex justify-around items-center">
        <div className="title flex flex-col">
          {title.map((t, idx) => {
            const Icon = iconsArray[t.id];

            return (
              <motion.div
                className="title__Wrapper"
                animate={{ x: [-200, 0] }}
                transition={{ duration: 1 }}
              >
                <h1
                  className=" text-4xl sm:text-6xl font-bold text-white"
                  key={t.id}
                >
                  {t.text}

                  <Icon
                    style={{
                      fontSize: "4rem",
                    }}
                  />
                </h1>
              </motion.div>
            );
          })}
        </div>
        <motion.div
          className="para w-[40vw] text-white flex flex-col h-[25vh] justify-between "
          animate={{ y: [-200, 0] }}
          transition={{ duration: 1 }}
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
    </section>
  );
};

export default Hero;
