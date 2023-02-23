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
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias necessitatibus eos perspiciatis! Quod numquam dolorum aspernatur mollitia quidem facere officiis!",
      icon: <BookmarkBorderIcon fontSize="large" />,
    },
    {
      id: 2,
      title: "Blog 2",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias necessitatibus eos perspiciatis! Quod numquam dolorum aspernatur mollitia quidem facere officiis!",
      icon: <BookmarkBorderIcon fontSize="large" />,
    },
    {
      id: 3,
      title: "Blog 3",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias necessitatibus eos perspiciatis! Quod numquam dolorum aspernatur mollitia quidem facere officiis!",
      icon: <BookmarkBorderIcon fontSize="large" />,
    },
    {
      id: 4,
      title: "Blog 4",
      text: "      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias necessitatibus eos perspiciatis! Quod numquam dolorum aspernatur mollitia quidem facere officiis!",
      icon: <BookmarkBorderIcon fontSize="large" />,
    },
    {
      id: 5,
      title: "Blog 5",
      text: "      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias necessitatibus eos perspiciatis! Quod numquam dolorum aspernatur mollitia quidem facere officiis!",
      icon: <BookmarkBorderIcon fontSize="large" />,
    },
    {
      id: 6,
      title: "Blog 6",
      text: "      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias necessitatibus eos perspiciatis! Quod numquam dolorum aspernatur mollitia quidem facere officiis!",
      icon: <BookmarkBorderIcon fontSize="large" />,
    },
    {
      id: 7,
      title: "Blog 7",
      text: "      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias necessitatibus eos perspiciatis! Quod numquam dolorum aspernatur mollitia quidem facere officiis!",
      icon: <BookmarkBorderIcon fontSize="large" />,
    },
    {
      id: 8,
      title: "Blog 8",
      text: "      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias necessitatibus eos perspiciatis! Quod numquam dolorum aspernatur mollitia quidem facere officiis!",
      icon: <BookmarkBorderIcon fontSize="large" />,
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
      <div className="flex flex-col-reverse md:flex-row w-[98%] mx-auto md:items-start items-center justify-between">
        <div className="w-[90%] md:w-[50%] md:h-[100%] sm:mt-0 mt-5 h-auto flex flex-col items-center">
          <div className="page__title hidden sm:text-6xl font-bold text-white md:flex md:flex-col md:justify-center items-center mt-2 mb-16 w-[35vw]">
            <h2 style={{ textShadow: "0px 0px 4px black" }}>
              Scroll Down for more!
            </h2>
          </div>
          <div className="blogs__main flex flex-col gap-14 md:h-[30rem] overflow-y-scroll scrollbar-hide">
            {blogs.map((b) => (
              <motion.div className="blogs items-center text-white border-1 rounded-lg my-5 p-[1rem] flex flex-col justify-around gap-[20px] hover:cursor-pointer">
                {/* <div className="top flex items-center gap-[4rem]">
                  <img
                    src="https://i.pinimg.com/originals/cb/5f/7d/cb5f7d713f88bd393ec630bf9914c1e5.jpg"
                    alt=""
                    className="w-[5rem] sm:w-[8rem] lg:w-[8rem]"
                  />
                  <div className="title font-bold text-3xl">{b.title}</div>
                </div>
                <div className="text font-semibold sm:w-[80vw] md:w-[40vw]">
                  {b.text}
                </div>
                <div className="func_icons flex gap-10">
                  <div className="save__icon">
                    <IconButton
                      onClick={() => {
                        handleClick(b.id);
                      }}
                    >
                      {b.icon}
                    </IconButton>
                  </div>
                  <div className="share">
                    <IconButton>
                      <ShareIcon fontSize="large" />
                    </IconButton>
                  </div>
                </div> */}
                <div className="top flex gap-10">
                  <div className="left flex">
                    <img
                      src="https://i.pinimg.com/originals/cb/5f/7d/cb5f7d713f88bd393ec630bf9914c1e5.jpg"
                      alt="Blog 1"
                      className="w-[15rem] rounded-xl"
                    />
                  </div>
                  <div className="right w-[30vw] flex flex-col justify-around gap-5">
                    <div className="title flex justify-center">
                      <h1 className="text-5xl">{b.title}</h1>
                    </div>
                    <div className="text font-semibold">
                      <p className="text-lg">{b.text}</p>
                    </div>
                  </div>
                </div>
                <div className="bottom">
                  <div className="func_icons flex gap-10">
                    <div className="save__icon">
                      <IconButton
                        onClick={() => {
                          handleClick(b.id);
                        }}
                      >
                        {b.icon}
                      </IconButton>
                    </div>
                    <div className="share">
                      <IconButton>
                        <ShareIcon fontSize="large" />
                      </IconButton>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className=" w-[90%] md:w-[40%] flex flex-col h-[auto]">
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
