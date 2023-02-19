import { Button } from "@mui/material";
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { IconButton } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";

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
  ];
  const hoverStyles = {
    backgroundColor: "#0a4091",
    border: "1px solid white",
  };
  return (
    <secion id="Blogs">
      <div className="page__title text-4xl sm:text-6xl font-bold text-white flex flex-col justify-center items-center mt-2 mb-10">
        <h1>Our Blogs -</h1>
      </div>
      <div className="flex flex-col md:flex-row w-[98%] mx-auto md:items-start items-center">
        <div className="w-[90%] md:w-[50%] h-[auto]">
          <div className="blogs__main flex flex-col gap-10">
            {blogs.map((b) => (
              <motion.div className="blogs items-center text-white border-1 rounded-lg p-[1.5rem] my-5 flex flex-col justify-around gap-[20px]">
                <div className="top flex items-center gap-[4rem]">
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
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className=" w-[90%] md:w-[60%] flex flex-col h-[auto]">
          <div className="page__title text-3xl sm:text-4xl font-bold text-white flex flex-col justify-center items-center mt-2 mb-10">
            <h1>Discover your own interests</h1>
          </div>
          <div className="filters flex flex-wrap gap-5 justify-center">
            {filters.map((f) => (
              <Button
                variant="outlined"
                sx={{
                  color: "white",
                  border: "1px solid white",
                  ":hover": hoverStyles,
                }}
              >
                {f.text}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </secion>
  );
};

export default Blogs;
