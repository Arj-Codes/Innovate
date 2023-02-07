import { Button } from "@mui/material";
import React, { useState } from "react";
import BookIcon from "@mui/icons-material/Book";

const Navbar = () => {
  const nav_items = ["Home", "Trending", "Our Story", "Membership"];
  return (
    <div className="flex justify-center mt-1">
      <nav className="flex justify-between md:w-[97vw] w-[80vw] text-white items-center font-bold">
        <div className="left flex w-[8rem] justify-between">
          <BookIcon className="m-auto"/>
          <h1 className="font-bold text-[1.5rem]">Innovate</h1>
        </div>
        <ul className="hidden justify-center w-auto md:flex">
          {nav_items.map((m) => (
            <div>
              <li className="hover:cursor-pointer relative mx-4 transition duration-300 ease-in-out transform hover:scale-110">
                {m}
              </li>
              {/* <div className="bg-white h-[0.75px] mt-1"></div> */}
            </div>
          ))}
        </ul>
        <button className="w-[5rem] h-[2.5rem] text-white border-[1px] rounded border-[#fefefe] p-[0.35rem] text-[14px] font-bold transition duration-300 ease-in-out transform hover:scale-110">
          Register
        </button>
      </nav>
    </div>
  );
};


export default Navbar;
