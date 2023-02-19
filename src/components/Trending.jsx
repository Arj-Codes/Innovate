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
      text: "    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur nostrum dicta eveniet molestias eos. Provident harum similique, dolorum voluptatem rerum, enim vitae ea quia consectetur, cupiditate voluptate ad neque numquam. Esse quis quo corporis? Aliquam nam, omnis earum cum dolorem nobis placeat tempore. Mollitia, porro iusto perferendis dignissimos nobis aut!",
      icon: <BookmarkBorderIcon fontSize="large" />,
    },
    {
      id: 2,
      title: "Blog 2",
      text: "    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur nostrum dicta eveniet molestias eos. Provident harum similique, dolorum voluptatem rerum, enim vitae ea quia consectetur, cupiditate voluptate ad neque numquam. Esse quis quo corporis? Aliquam nam, omnis earum cum dolorem nobis placeat tempore. Mollitia, porro iusto perferendis dignissimos nobis aut!",
      icon: <BookmarkBorderIcon fontSize="large" />,
    },
    {
      id: 3,
      title: "Blog 3",
      text: "    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur nostrum dicta eveniet molestias eos. Provident harum similique, dolorum voluptatem rerum, enim vitae ea quia consectetur, cupiditate voluptate ad neque numquam. Esse quis quo corporis? Aliquam nam, omnis earum cum dolorem nobis placeat tempore. Mollitia, porro iusto perferendis dignissimos nobis aut!",
      icon: <BookmarkBorderIcon fontSize="large" />,
    },
    {
      id: 4,
      title: "Blog 4",
      text: "    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur nostrum dicta eveniet molestias eos. Provident harum similique, dolorum voluptatem rerum, enim vitae ea quia consectetur, cupiditate voluptate ad neque numquam. Esse quis quo corporis? Aliquam nam, omnis earum cum dolorem nobis placeat tempore. Mollitia, porro iusto perferendis dignissimos nobis aut!",
      icon: <BookmarkBorderIcon fontSize="large" />,
    },
  ];
  const handleClick = (h) => {
    const blogIndex = blogs.findIndex((blog) => blog.id === h);
    console.log(blogIndex);
    if (blogs[blogIndex].icon.type === BookmarkBorderIcon) {
      blogs[blogIndex].icon = <BookmarkIcon fontSize="large" />;
    } else {
      blogs[blogIndex].icon = <BookmarkBorderIcon fontSize="large" />;
    }
  };
  return (
    <section id="Trending" className="py-[5rem]">
      <div className="page__title text-4xl sm:text-6xl font-bold text-white flex flex-col justify-center items-center mt-2 mb-10">
        <h1>Our top stories -</h1>
      </div>
      <div
        className="flex hover:cursor-pointer justify-around gap-10 flex-wrap w-full"
        ref={ref}
      >
        {blogs.map((b) => (
          <motion.div
            className="blogs items-center text-white border-1 rounded-lg p-[1.5rem] my-5 flex flex-col justify-around lg:h-[75vh] md:h-[90vh] sm:h-[100vh]"
            animate={controls}
            initial="hidden"
            variants={cardVariants}
          >
            <div className="top flex items-center gap-[4rem]">
              <img
                src="https://i.pinimg.com/originals/cb/5f/7d/cb5f7d713f88bd393ec630bf9914c1e5.jpg"
                alt=""
                className="w-[15rem] sm:w-[10rem] lg:w-[15rem]"
              />
              <div className="title font-bold text-3xl">{b.title}</div>
            </div>
            <div className="text font-semibold sm:w-[30vw] md:w-[40vw]">
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
                  <ShareIcon fontSize="large"/>
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
