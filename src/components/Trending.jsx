import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ShareIcon from "@mui/icons-material/Share";
import { IconButton } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useState } from "react";
import { BiTrendingUp } from "react-icons/bi";
import { useInView } from "react-intersection-observer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TrendingCard from "./TrendingCard";

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
    id: "01",
    title: "Blog 1",
    name: "Abir Banerjee",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, ad.",
    icon1: <BookmarkBorderIcon fontSize="small" />,
    icon2: <BookmarkIcon fontSize="small" />,
  },
  {
    id:" 02",
    title: "Blog 2",
    name: "Ramit Sarkar",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, ad.",
    icon1: <BookmarkBorderIcon fontSize="small" />,
    icon2: <BookmarkIcon fontSize="small" />,
  },
  {
    id: "03",
    title: "Blog 3",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, ad.",
    icon1: <BookmarkBorderIcon fontSize="small" />,
    icon2: <BookmarkIcon fontSize="small" />,
  },
  {
    id: "04",
    title: "Blog 4",
    name: "Abir Banerjee",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, ad.",
    icon1: <BookmarkBorderIcon fontSize="small" />,
    icon2: <BookmarkIcon fontSize="small" />,
  },
  {
    id: "05",
    title: "Blog 5",
    name: "Ramit Sarkar",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, ad.",
    icon1: <BookmarkBorderIcon fontSize="small" />,
    icon2: <BookmarkIcon fontSize="small" />,
  },
  {
    id: "06",
    title: "Blog 6",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, ad.",
    icon1: <BookmarkBorderIcon fontSize="small" />,
    icon2: <BookmarkIcon fontSize="small" />,
  },
  {
    id: "07",
    name: "Ramit Sarkar",
    title: "Blog 7",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, ad.",
    icon1: <BookmarkBorderIcon fontSize="small" />,
    icon2: <BookmarkIcon fontSize="small" />,
  },
  {
    id: "08",
    name: "Abir Banerjee",
    title: "Blog 8",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, ad.",
    icon1: <BookmarkBorderIcon fontSize="small" />,
    icon2: <BookmarkIcon fontSize="small" />,
  },
  {
    id:"09",
    name: "Ramit Sarkar",
    title: "Blog 9",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, ad.",
    icon1: <BookmarkBorderIcon fontSize="small" />,
    icon2: <BookmarkIcon fontSize="small" />,
  },
  {
    id: "10",
    name: "Prakhar Martand",
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
  const diffToast = () => {
    alert("Successfully Saved!");
  };
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
      className="py-[2rem] w-[100vw] h-[70vh] flex flex-col justify-center bg-white"
    >
      <div className="text-4xl sm:text-3xl font-bold text-black flex justify-center items-start w-full mb-10">
        <motion.p
          className="font-bold text-3xl"
          style={{ textShadow: "0px 0px 4px white" }}
          whileHover={{
            scale: 1.05,

            cursor: "pointer",
          }}
        >
          <p className="flex items-center">
            {" "}
            <BiTrendingUp className="mx-2" />
            Trending
          </p>
        </motion.p>
      </div>
      <div
        className="flex hover:cursor-pointer gap-[40px] flex-wrap justify-center"
        ref={ref}
      >
        {/*  {blogs.map((b) => {
          const [i, setI] = useState("false");
          return (
            <motion.div
              className="blogs items-center text-white border-1 rounded-lg p-[0.5rem] gap-2 my-5 flex flex-col justify-around h-auto sm:w-auto w-[80%]"
              animate={controls}
              variants={cardVariants}
              whileHover={{
                scale: 1.1,
                textShadow: "0px 0px 4px black",
                cursor: "pointer",
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
                      {
                        diffToast;
                      }
                    }}
                  >
                    {i ? b.icon1 : b.icon2}
                  </IconButton>
                </div>
                <ToastContainer />
                <div className="share">
                  <IconButton>
                    <ShareIcon fontSize="small" />
                  </IconButton>
                </div>
              </div>
            </motion.div>
          );
        })} */}
        {blogs.map((b) => (
          <TrendingCard id={b.id} name={b.name} title={b.title} />
        ))}
      </div>
    </section>
  );
};

export default Trending;
