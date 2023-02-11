import React, { useEffect, useState } from "react";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import PsychologyIcon from "@mui/icons-material/Psychology";
import CreateIcon from "@mui/icons-material/Create";
const Home = () => {
  const title = [
    { id: 1, text: "Think" },
    { id: 2, text: "Innovate" },
    { id: 3, text: "Write" },
  ];

  return (
    <div>
      <div className=" w-[100vw] sm:w-[85vw] h-[90vh] mx-auto flex justify-around items-center">
        <div className="title flex flex-col">
          {title.map((t) => (
            <div className="title__Wrapper">
              <h1
                className=" text-4xl sm:text-6xl font-bold text-white"
                key={t.id}
              >
                {t.text}
                <span className="ml-3 hover:cursor-pointer">
                  {t.id == 1 && (
                    <PsychologyIcon
                      style={{
                        fontSize: "4rem",
                      }}
                    />
                  )}
                  {t.id == 2 && (
                    <LightbulbIcon
                      style={{
                        fontSize: "4rem",
                      }}
                    />
                  )}
                  {t.id == 3 && (
                    <CreateIcon
                      style={{
                        fontSize: "4rem",
                      }}
                    />
                  )}
                </span>
              </h1>
            </div>
          ))}
        </div>
        <div className="para w-[40vw] text-white flex flex-col h-[25vh] justify-between">
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
        </div>
      </div>
    </div>
  );
};

export default Home;
