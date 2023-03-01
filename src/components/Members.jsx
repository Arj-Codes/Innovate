import { motion } from "framer-motion";
import React from "react";

const Members = () => {
  return (
    <section id="Members">
      <h1 className="text-center text-gray-200 text-4xl font-bold mt-2">
        OUR MEMBERS
      </h1>
      <div className="flex w-full items-center justify-center h-[80%]">
        <div className="flex sm:w-[60%] w-full flex-wrap sm:gap-[60px] gap-[30px] justify-center">
          <motion.img
            animate={{ opacity: 1, scale: [0, 1], duration: 3 }}
            transition={{ type: "spring", stiffness: 200 }}
            whileHover={{ scale: 1.05 }}
            className="sm:w-24  w-16 object-cover rounded-full cursor-pointer member_img"
            src="./member2.jpeg"
            alt="member_img"
          />
          <motion.img
            animate={{ opacity: 1, scale: [0, 1], duration: 3 }}
            transition={{ type: "spring", stiffness: 200 }}
            whileHover={{ scale: 1.05 }}
            className="sm:w-24  w-16 object-cover rounded-full cursor-pointer"
            src="./member1.jpeg"
            alt="member_img"
          />
          <motion.img
            animate={{ opacity: 1, scale: [0, 1], duration: 3 }}
            transition={{ type: "spring", stiffness: 200 }}
            whileHover={{ scale: 1.05 }}
            className="sm:w-24  w-16 object-cover rounded-full cursor-pointer"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Elon_Musk_Brazil_2022.png/1200px-Elon_Musk_Brazil_2022.png"
            alt="member_img"
          />
          <motion.img
            animate={{ opacity: 1, scale: [0, 1], duration: 3 }}
            transition={{ type: "spring", stiffness: 200 }}
            whileHover={{ scale: 1.05 }}
            className="sm:w-24  w-16 object-cover rounded-full cursor-pointer"
            src="./member2.jpeg"
            alt="member_img"
          />
          <motion.img
            animate={{ opacity: 1, scale: [0, 1], duration: 3 }}
            transition={{ type: "spring", stiffness: 200 }}
            whileHover={{ scale: 1.05 }}
            className="sm:w-24  w-16 object-cover rounded-full cursor-pointer"
            src="./member1.jpeg"
            alt="member_img"
          />
        </div>
      </div>
    </section>
  );
};

export default Members;
