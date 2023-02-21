import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import BookIcon from "@mui/icons-material/Book";
import { Button } from "@mui/material";
import { motion, useScroll } from "framer-motion";
import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const nav_items = ["Home", "Trending", "Blogs", "About Us"];
  return (
    <div id="navb" className="flex md:justify-center p-3 sticky top-0 z-40">
      <nav className="flex justify-between md:w-[97vw] w-[100vw] text-white items-center font-bold">
        <div className="left flex w-[8rem] justify-between">
          <AutoStoriesIcon className="m-auto mr-3" />
          <motion.h1
            className="font-bold text-[2rem]"
            style={{ textShadow: "0px 0px 4px black" }}
            whileHover={{
              scale: 1.02,
              textShadow: "0px 0px 4px white",
              cursor: "pointer",
            }}
          >
            BlogerBase
          </motion.h1>
        </div>
        <ul className="hidden justify-center w-auto md:flex">
          {nav_items.map((m) => (
            <div>
              <motion.li
                id="navb_icon"
                className="hover:cursor-pointer relative mx-4 transition duration-300 ease-in-out hover:scale-110"
                style={{ textShadow: "0px 0px 4px black" }}
                whileHover={{
                  scale: 1.05,
                  textShadow: "0px 0px 4px white",
                  cursor: "pointer",
                }}
              >
                {m === "Home" ? (
                  <Link
                    activeClass="active"
                    smooth
                    spy
                    to="Hero"
                    duration={400}
                    exact="true"
                    offset={-70}
                  >
                    {m}
                  </Link>
                ) : (
                  <Link
                    activeClass="active"
                    smooth
                    spy
                    to={m}
                    duration={500}
                    exact="true"
                    offset={-70}
                  >
                    {m}
                  </Link>
                )}
              </motion.li>
              {/* <div className="bg-white h-[0.75px] mt-1"></div> */}
            </div>
          ))}
        </ul>
        <div className="signin md:w-[22vw] flex sm:w-[22vw] justify-between lg:w-[11vw]">
          <button className=" w-[5rem] h-[2.5rem] text-white border-[1px] rounded border-[#fefefe] p-[0.35rem] text-[14px] font-bold transition duration-300 ease-in-out transform hover:scale-110">
            Login
          </button>
          <button className="w-[5rem] h-[2.5rem] text-white border-[1px] rounded border-[#fefefe] p-[0.35rem] text-[14px] font-bold transition duration-300 ease-in-out transform hover:scale-110 mx-2">
            Register
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
