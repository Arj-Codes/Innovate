import { motion } from "framer-motion";
import React from "react";
import Tilt from "react-tilt";

const TrendingCard = ({ id, title, name }) => {
  return (
    <>
      <Tilt
        className="sm:w-[40%] md:w-[30%] lg:w-[20%] w-[70%]"
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
      >
        <div className="card flex justify-center items-start  border-[#5a5a5a] border-[0.25px] hover:border-none ">
          <p className="w-[10%] text-gray-400 text-lg font-bold">{id}</p>
          <div className="flex flex-col w-[80%] ml-2">
            <span className="flex justify-start items-center">
              <img
                src="https://media.npr.org/assets/img/2022/11/08/ap22312071681283-0d9c328f69a7c7f15320e8750d6ea447532dff66.jpg"
                alt=""
                className="w-[2rem] object-cover rounded-full"
              />
              <p className="ml-2 font-semibold text-md">{name}</p>
            </span>
            <p className="w-full text-xl font-bold my-2">{title}</p>
            <span className="flex justify-start items-center">
              <p className="text-gray-400 text-md  font-semibold">Feb 22</p>
              <p className="text-black text-md  font-semibold mx-1">.</p>
              <p className="text-blue-400 text-md  font-semibold">1.1K Views</p>
            </span>
          </div>
        </div>
      </Tilt>
    </>
  );
};

export default TrendingCard;
