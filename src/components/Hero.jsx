import { Scale } from "@mui/icons-material";
import CreateIcon from "@mui/icons-material/Create";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import PsychologyIcon from "@mui/icons-material/Psychology";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { motion, useAnimation, useScroll } from "framer-motion";
import React, { useEffect, useState } from "react";
import { GiShipWheel } from "react-icons/gi";
import Iframe from "react-iframe";
import { TypeAnimation } from "react-type-animation";

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
    <section
      id="Hero"
      className="flex h-[100vh] w-full mx-auto justify-center relative"
    >
      <video src="./stars.mp4" autoPlay loop muted className="vid" />
      <div className="wrapper flex sm:flex-row flex-col items-center justify-center  lg:w-[80vw] w-[100vw] z-20">
        <div className="relative sm:h-[80%] sm:w-[60%] w-full h-[60%]">
          {/*  <img
            src="./heromain.png"
            alt=""
            className="rounded-3xl w-auto sm:h-[50vh] h-[30vh]"
          /> */}
          <Canvas>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Sphere args={[1, 100, 200]} scale={2}>
              <MeshDistortMaterial
                color="#3d1c56"
                attach="material"
                distort={0.5}
                speed={2}
              />
            </Sphere>
          </Canvas>
          <img
            className="hero_img"
            src="./astro.png"
          />
        </div>
        <div className="flex flex-col justify-between items-center">
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
          <div className="mt-10 flex sm:items-end justify-center">
            <TypeAnimation
              sequence={[
                "Create", // Types 'One'
                1500, // Waits 1s
                "Innovate", // Deletes 'One' and types 'Two'
                2500, // Waits 2s
                "Publish",
                3500, // Types 'Three' without deleting 'Two'
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: "2em", fontWeight: "800", color: "#ff00f2" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
