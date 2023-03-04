import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ShareIcon from "@mui/icons-material/Share";
import { Button, IconButton } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Scrollbar } from "react-custom-scrollbars";

const Blogs = () => {
  const filters = [
    {
      id: 1,
      text: "Programming",
    },
    {
      id: 2,
      text: "Data Science",
    },
    {
      id: 3,
      text: "Technology",
    },
    {
      id: 4,
      text: "Self Improvement",
    },
    {
      id: 5,
      text: "Writing",
    },
    {
      id: 6,
      text: "Relationships",
    },
    {
      id: 7,
      text: "Machine Learning",
    },
    {
      id: 8,
      text: "Productivity",
    },
    {
      id: 9,
      text: "Politics",
    },
  ];
  const blogs = [
    {
      id: 1,
      title: "Blog 1",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias necessitatibus eos perspiciatis! ",
      icon: <BookmarkBorderIcon fontSize="large" />,
      img: "./blog1.png",
    },
    {
      id: 2,
      title: "Blog 2",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias necessitatibus eos perspiciatis! ",
      icon: <BookmarkBorderIcon fontSize="large" />,
      img: "./blog2.png",
    },
    {
      id: 3,
      title: "Blog 3",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias necessitatibus eos perspiciatis! ",
      icon: <BookmarkBorderIcon fontSize="large" />,
      img: "./blog3.jpg",
    },
    {
      id: 4,
      title: "Blog 4",
      text: "      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias necessitatibus eos perspiciatis!",
      icon: <BookmarkBorderIcon fontSize="large" />,
      img: "./blog4.jpg",
    },
    {
      id: 5,
      title: "Blog 5",
      text: "      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias necessitatibus eos perspiciatis!",
      icon: <BookmarkBorderIcon fontSize="large" />,
      img: "./blog5.jpg",
    },
    {
      id: 6,
      title: "Blog 6",
      text: "      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias necessitatibus eos perspiciatis!",
      icon: <BookmarkBorderIcon fontSize="large" />,
      img: "./blog6.jpg",
    },
    {
      id: 7,
      title: "Blog 7",
      text: "      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias necessitatibus eos perspiciatis!",
      icon: <BookmarkBorderIcon fontSize="large" />,
      img: "./blog7.jpg",
    },
    {
      id: 8,
      title: "Blog 8",
      text: "      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias necessitatibus eos perspiciatis!",
      icon: <BookmarkBorderIcon fontSize="large" />,
      img: "./blog8.jpg",
    },
  ];
  const hoverStyles = {
    backgroundColor: "#0a4091",
    border: "1px solid white",
    textShadow: "0px 0px 4px black",
    cursor: "pointer",
  };
  return (
    <section id="Blogs" className="mb-[5rem] h-[auto]">
      <div className="page__title text-4xl sm:text-6xl font-bold text-white flex flex-col justify-center items-center mt-2 mb-10">
        <motion.h1
          style={{ textShadow: "0px 0px 4px black" }}
          whileHover={{
            scale: 1.05,
            textShadow: "0px 0px 4px white",
            cursor: "pointer",
          }}
        >
          Our Blogs -
        </motion.h1>
      </div>
      <div className="flex flex-col-reverse md:flex-row lg:w-[95%] mx-auto md:items-start items-center justify-between">
        <div className="w-[100%] sm:w-full xl:w-[98%] md:w-[60%] md:h-[100%] sm:mt-0 mt-5 h-auto flex flex-col items-center">
          <div className="page__title hidden sm:text-6xl text-white md:flex md:flex-col md:justify-center items-center mt-2 mb-16 w-[35vw]">
            <h2 style={{ textShadow: "0px 0px 4px black" }}>
              Scroll Down for more!
            </h2>
          </div>
          <div className="blogs__main flex flex-col gap-14 sm:gap-5 sm:mt-5 md:h-[30rem] overflow-y-scroll scrollbar-hide">
            {blogs.map((b) => (
              <motion.div className="blogs items-center text-white border border-1 rounded-lg my-5 p-[1rem] flex flex-col justify-around gap-[20px] hover:cursor-pointer bg-[#1d1c1c] border-[#bf02b5] sm:w-[90vw] w-[95vw] md:w-[50vw]">
                <div className="top flex gap-10 relative md:w-[48vw] sm:w-[80vw] w-[95vw]">
                  <div className="left flex">
                    <img
                      src={b.img}
                      alt="Blog 1"
                      className="md:w-[25vw] sm:w-[40vw] w-[50vw] rounded-xl "
                    />
                  </div>
                  <div className="right md:w-[30vw] sm:w-[45vw] w-[55vw] flex flex-col justify-around gap-5 lg:gap-5 md:gap-1 bg-[#2e2b2b] absolute right-0 lg:top-14 xl:top-20 md:top-12 sm:top-14 top-8 rounded-2xl p-2 lg:h-[25vh] md:h-[15vh]">
                    <div className="title flex justify-center">
                      <h1 className="lg:text-5xl md:text-xl text-3xl text-[#bf02b5] font-bold sm:text-3xl">
                        {b.title}
                      </h1>
                    </div>
                    <div className="text font-semibold rounded-3xl bg-[#393939] p-2">
                      <p className="lg:text-md md:text-xs sm:text-md xl:text-xl text-md">{b.text}</p>
                    </div>
                  </div>
                </div>
                <div className="bottom flex justify-end w-full">
                  <div className="func_icons flex gap-5 md:gap-1">
                    <div className="save__icon">
                      <IconButton
                        onClick={() => {
                          handleClick(b.id);
                        }}
                        style={{ color: "#bf02b5" }}
                      >
                        {b.icon}
                      </IconButton>
                    </div>
                    <div className="share">
                      <IconButton>
                        <ShareIcon
                          fontSize="large"
                          style={{ color: "#bf02b5" }}
                        />
                      </IconButton>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className=" lg:w-[80%] xl:w-[80%] md:w-[40%] flex flex-col h-[auto]">
          <div className="page__title text-3xl sm:text-4xl font-bold text-white flex flex-col justify-center items-center mt-2 mb-10">
            <h1 style={{ textShadow: "0px 0px 4px black" }}>
              Discover your own interests
            </h1>
          </div>
          <div className="filters flex flex-wrap gap-5 justify-center">
            {filters.map((f) => (
              <button className="btn">{f.text}</button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
