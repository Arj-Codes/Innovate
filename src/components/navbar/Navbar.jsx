import { motion, useScroll } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS, animateScroll as scroll } from "react-scroll";
import { Tooltip } from "react-tooltip";
import { logOut } from "../../api.js";

const nav_items = ["Home", "Trending", "Blogs", "About Us"];

const Navbar = () => {
  const [scrollNav, setScrollNav] = useState(false);
  const { userData } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const google = () => {
    window.open("http://localhost:9000/auth/google", "_self");
  };

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
      className={`flex md:justify-center px-2 py-1 sticky z-40 transition ease-in-out delay-0
      ${
        !scrollNav
          ? "top-2 rounded-[5rem] w-[98vw] sm:w-[95vw] lg:w-[80vw] md:w-[95vw] mx-auto"
          : "top-0 rounded-none animate-nav"
      }
      `}
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
                  <LinkS
                    activeClass="active"
                    smooth
                    spy
                    to="Hero"
                    duration={400}
                    exact="true"
                    offset={-70}
                  >
                    {m}
                  </LinkS>
                ) : (
                  <LinkS
                    activeClass="active"
                    smooth
                    spy
                    to={m}
                    duration={500}
                    exact="true"
                    offset={-70}
                  >
                    {m}
                  </LinkS>
                )}
              </motion.li>
              {/* <div className="bg-white h-[0.75px] mt-1"></div> */}
            </div>
          ))}
        </ul>
        {!userData && (
          <div className="signin md:w-[16vw] flex sm:w-[22vw] justify-end lg:w-[12vw]">
            {/*  <button
              className="bg-[#393939] nav__btn transition duration-300 ease-in-out md:px-4 flex justify-center"
              onClick={google}
            >
              Google
            </button> */}
            <button
              onClick={google}
              className="bg-[#393939] nav__btn transition duration-300 ease-in-out md:px-4 flex justify-between"
            >
              <img
                src="https://www.transparentpng.com/thumb/google-logo/google-logo-png-icon-free-download-SUF63j.png"
                className="w-5 rounded-full"
              />
              <p className="ml-1">Sign In</p>
            </button>
            {/* <button className="bg-[#393939] nav__btn transition duration-300 ease-in-out md:px-5 flex justify-center">
              <h4 className="md:text-[0.85rem] text-[1rem]">Register</h4>
            </button> */}
          </div>
        )}
        {userData && (
          <div className="flex  items-center">
            <h2 className="text-xs text-red-300">{userData.username}</h2>

            <img
              className="w-10 rounded-full object-cover mx-3 profile_img cursor-pointer"
              src={userData.img}
              alt="user_image"
              data-toggle="tooltip"
              data-placement="top"
              data-trigger="hover"
              title="Click to logout!"
              onClick={(e) => {
                e.preventDefault();
                logOut(dispatch);
              }}
            />
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
