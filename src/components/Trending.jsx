import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ShareIcon from "@mui/icons-material/Share";
import { IconButton } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const cardVariants = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 },
  },
  hidden: { opacity: 0, scale: 0 },
};

const blogs = [
  {
    id: 1,
    title: "Blog 1",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, ad.",
    icon1: <BookmarkBorderIcon fontSize="small" />,
    icon2: <BookmarkIcon fontSize="small" />,
  },
  {
    id: 2,
    title: "Blog 2",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, ad.",
    icon1: <BookmarkBorderIcon fontSize="small" />,
    icon2: <BookmarkIcon fontSize="small" />,
  },
  {
    id: 3,
    title: "Blog 3",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, ad.",
    icon1: <BookmarkBorderIcon fontSize="small" />,
    icon2: <BookmarkIcon fontSize="small" />,
  },
  {
    id: 4,
    title: "Blog 4",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, ad.",
    icon1: <BookmarkBorderIcon fontSize="small" />,
    icon2: <BookmarkIcon fontSize="small" />,
  },
  {
    id: 5,
    title: "Blog 5",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, ad.",
    icon1: <BookmarkBorderIcon fontSize="small" />,
    icon2: <BookmarkIcon fontSize="small" />,
  },
  {
    id: 6,
    title: "Blog 6",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, ad.",
    icon1: <BookmarkBorderIcon fontSize="small" />,
    icon2: <BookmarkIcon fontSize="small" />,
  },
  {
    id: 7,
    title: "Blog 7",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, ad.",
    icon1: <BookmarkBorderIcon fontSize="small" />,
    icon2: <BookmarkIcon fontSize="small" />,
  },
  {
    id: 8,
    title: "Blog 8",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, ad.",
    icon1: <BookmarkBorderIcon fontSize="small" />,
    icon2: <BookmarkIcon fontSize="small" />,
  },
  {
    id: 9,
    title: "Blog 9",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, ad.",
    icon1: <BookmarkBorderIcon fontSize="small" />,
    icon2: <BookmarkIcon fontSize="small" />,
  },
  {
    id: 10,
    title: "Blog 10",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, ad.",
    icon1: <BookmarkBorderIcon fontSize="small" />,
    icon2: <BookmarkIcon fontSize="small" />,
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

  return (
    <section
      id="Trending"
      className="py-[5rem] w-[100vw] h-[auto] flex flex-col justify-evenly"
    >
      <div className="page__title text-4xl sm:text-6xl font-bold text-white flex flex-col justify-center items-center my-2">
        <motion.h1  style={{textShadow: "0px 0px 4px black"}} whileHover={{
                  scale: 1.05,
                  textShadow: "0px 0px 4px white",
                  cursor: "pointer",
                }}>Our top stories -</motion.h1>
      </div>
      <div
        className="flex hover:cursor-pointer gap-5 flex-wrap justify-evenly"
        ref={ref}
      >
        {blogs.map((b) => {
          const [i, setI] = useState("false");
          return (
            <motion.div
              className="blogs items-center text-white border-1 rounded-lg p-[0.5rem] gap-2 my-5 flex flex-col justify-around h-auto sm:w-auto w-[80%]"
              animate={controls}
              
              variants={cardVariants}
              whileHover={{
                scale: 1.1,
                textShadow: "0px 0px 4px black",
                cursor: "pointer"
              }}
            >
              <div className="top flex gap-2 justify-start w-full">
                <img
                  src="https://i.pinimg.com/originals/cb/5f/7d/cb5f7d713f88bd393ec630bf9914c1e5.jpg"
                  alt=""
                  className="w-[5rem] lg:w-[2rem] rounded-full"
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
                      setI(!i);
                    }}
                  >
                    {i ? b.icon1 : b.icon2}
                  </IconButton>
                </div>
                <div className="share">
                  <IconButton>
                    <ShareIcon fontSize="small" />
                  </IconButton>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Trending;
