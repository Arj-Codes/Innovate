import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import BookIcon from "@mui/icons-material/Book";
import { Button } from "@mui/material";
import { motion, useScroll } from "framer-motion";
import React, { useState,useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const nav_items = ["Home", "Trending", "Blogs", "About Us"];

const Navbar = () => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 100) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    <div
      id={`${!scrollNav ? "navb" : "navb-down"}`}
      className="flex md:justify-center px-2 py-1 sticky top-2 z-40 w-[98vw] sm:w-[95vw] lg:w-[80vw] md:w-[95vw] mx-auto rounded-[5rem]"
    >
      <nav className="flex justify-between w-[97vw] text-white items-center font-bold">
        <div className="flex w-auto justify-between items-center">
          {/* <AutoStoriesIcon className="m-auto mr-3 hover:cursor-pointer" style={{color:"orange"}}/> */}
          <img
            src="./logo.jpg"
            alt=""
            className="m-auto mr-3 hover:cursor-pointer w-[3rem]"
          />
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
                className="hover:cursor-pointer relative lg:mx-3 px-[0.8rem] py-[0.5rem] rounded-3xl transition duration-300 ease-in-out hover:bg-[#393939]"
                style={{ textShadow: "0px 0px 4px black" }}
                whileHover={{
                  // scale: 1.05,
                  // textShadow: "0px 0px 4px white",
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
        <div className="signin md:w-[16vw] flex sm:w-[22vw] justify-between lg:w-[12vw] gap-1">
          <button className="bg-[#393939] nav__btn transition duration-300 ease-in-out md:px-4 flex justify-center">
            <h4 className=" md:text-[0.85rem] text-[1rem]">Login</h4>
          </button>
          <button className="bg-[#393939] nav__btn transition duration-300 ease-in-out md:px-5 flex justify-center">
            <h4 className="md:text-[0.85rem] text-[1rem]">Register</h4>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
