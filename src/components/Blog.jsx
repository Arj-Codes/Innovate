import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const cardVariants = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1 },
  },
  hidden: { opacity: 0, scale: 0 },
};

const Blog = () => {
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
    },
    {
      id: 2,
      title: "Blog 2",
      text: "    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur nostrum dicta eveniet molestias eos. Provident harum similique, dolorum voluptatem rerum, enim vitae ea quia consectetur, cupiditate voluptate ad neque numquam. Esse quis quo corporis? Aliquam nam, omnis earum cum dolorem nobis placeat tempore. Mollitia, porro iusto perferendis dignissimos nobis aut!",
    },
    {
      id: 3,
      title: "Blog 3",
      text: "    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur nostrum dicta eveniet molestias eos. Provident harum similique, dolorum voluptatem rerum, enim vitae ea quia consectetur, cupiditate voluptate ad neque numquam. Esse quis quo corporis? Aliquam nam, omnis earum cum dolorem nobis placeat tempore. Mollitia, porro iusto perferendis dignissimos nobis aut!",
    },
    {
      id: 4,
      title: "Blog 4",
      text: "    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur nostrum dicta eveniet molestias eos. Provident harum similique, dolorum voluptatem rerum, enim vitae ea quia consectetur, cupiditate voluptate ad neque numquam. Esse quis quo corporis? Aliquam nam, omnis earum cum dolorem nobis placeat tempore. Mollitia, porro iusto perferendis dignissimos nobis aut!",
    },
  ];
  return (
    <section id="Blogs">
      <div className="page__title text-4xl sm:text-6xl font-bold font- text-white flex flex-col justify-center items-center mt-2 mb-10">
        <h1>Our stories -</h1>
      </div>
      <div
        className="container flex flex-wrap justify-around hover:cursor-pointer lg:gap-[40px]"
        ref={ref}
      >
        {blogs.map((b) => (
          <motion.div
            className="blogs items-center text-white border-1 rounded-lg p-[1.5rem] lg:m-5 my-5 flex flex-col justify-around lg:h-[65vh] md:h-[90vh]"
            animate={controls}
            initial="hidden"
            variants={cardVariants}
          >
            <img
              src="https://i.pinimg.com/originals/cb/5f/7d/cb5f7d713f88bd393ec630bf9914c1e5.jpg"
              alt=""
              className="w-[15rem] lg:w-[15rem]"
            />
            <div className="title font-bold text-3xl">{b.title}</div>
            <div className="text font-semibold sm:w-[30vw] md:w-[40vw]">
              {b.text}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
