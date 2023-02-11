import BookIcon from "@mui/icons-material/Book";
import { Button } from "@mui/material";
import { motion, useScroll } from "framer-motion";
import React, { useState } from "react";
import { animateScroll as scroll, Link } from "react-scroll";

const Navbar = () => {
  const nav_items = ["Home", "Blogs", "Membership", "About Us"];
  return (
    <div className="flex md:justify-center p-3">
      <nav className="flex justify-between md:w-[97vw] w-[100vw] text-white items-center font-bold">
        <div className="left flex w-[8rem] justify-between">
          <BookIcon className="m-auto" />
          <h1 className="font-bold text-[1.5rem]">Innovate</h1>
        </div>
        <ul className="hidden justify-center w-auto md:flex">
          {nav_items.map((m) => (
            <div>
              <li className="hover:cursor-pointer relative mx-4 transition duration-300 ease-in-out transform hover:scale-110">
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
              </li>
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
