import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { IconButton } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";

const cardVariants = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1 },
  },
  hidden: { opacity: 0, scale: 0 },
};

const Trending = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const blogs = [
    {
      id: 1,
      title: "Blog 1",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, ad.",
      icon: <BookmarkBorderIcon fontSize="small" />,
    },
    {
      id: 2,
      title: "Blog 2",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, ad.",
      icon: <BookmarkBorderIcon fontSize="small" />,
    },
    {
      id: 3,
      title: "Blog 3",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, ad.",
      icon: <BookmarkBorderIcon fontSize="small" />,
    },
    {
      id: 4,
      title: "Blog 4",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, ad.",
      icon: <BookmarkBorderIcon fontSize="small" />,
    },
    {
      id: 5,
      title: "Blog 5",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, ad.",
      icon: <BookmarkBorderIcon fontSize="small" />,
    },
    {
      id: 6,
      title: "Blog 6",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, ad.",
      icon: <BookmarkBorderIcon fontSize="small" />,
    },
    {
      id: 7,
      title: "Blog 7",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, ad.",
      icon: <BookmarkBorderIcon fontSize="small" />,
    },
    {
      id: 8,
      title: "Blog 8",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, ad.",
      icon: <BookmarkBorderIcon fontSize="small" />,
    },
    {
      id: 9,
      title: "Blog 9",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, ad.",
      icon: <BookmarkBorderIcon fontSize="small" />,
    },
    {
      id: 10,
      title: "Blog 10",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, ad.",
      icon: <BookmarkBorderIcon fontSize="small" />,
    },
  ];
  const handleClick = (h) => {
    const blogIndex = blogs.findIndex((blog) => blog.id === h);
    console.log(blogIndex);
    if (blogs[blogIndex].icon.type === BookmarkBorderIcon) {
      blogs[blogIndex].icon = <BookmarkIcon fontSize="small" />;
    } else {
      blogs[blogIndex].icon = <BookmarkBorderIcon fontSize="small" />;
    }
  };
  return (
    <section id="Trending" className="py-[5rem] w-[100vw] h-[90vh] flex flex-col justify-evenly">
      <div className="page__title text-4xl sm:text-6xl font-bold text-white flex flex-col justify-center items-center mt-2">
        <h1>Our top stories -</h1>
      </div>
      <div
        className="flex hover:cursor-pointer gap-5 flex-wrap justify-evenly"
        ref={ref}
      >
        {blogs.map((b) => (
          <motion.div
            className="blogs items-center text-white border-1 rounded-lg p-[0.5rem] gap-2 my-5 flex flex-col justify-around h-auto"
            animate={controls}
            initial="hidden"
            variants={cardVariants}
          >
            <div className="top flex gap-2 justify-start w-full">
              <img
                src="https://i.pinimg.com/originals/cb/5f/7d/cb5f7d713f88bd393ec630bf9914c1e5.jpg"
                alt=""
                className="w-[15rem] sm:w-[10rem] lg:w-[2rem] rounded"
              />
              <div className="title font-bold text-xl my-auto">{b.title}</div>
            </div>
            <div className="text font-semibold sm:w-[10vw] md:w-[17vw] text-sm">
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
                  <ShareIcon fontSize="small" />
                </IconButton>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Trending;
