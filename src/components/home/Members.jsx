import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import React from "react";
import BallCanvas from "../canvas/Ball";
const Members = () => {
  return (
    <section id="Members">
      <h1 className="text-center text-gray-200 text-4xl font-bold pt-2">
        OUR MEMBERS
      </h1>
      <div className="flex w-full items-center justify-center h-[80%]">
        <div className="flex w-[90%] flex-wrap gap-[50px] justify-center py-5">
          {[1, 2, 3, 4, 5, 6].map((m, idx) => (
            <div className="sm:w-48  sm:h-48  w-32 h-32 object-cover rounded-full cursor-pointer relative">
              <BallCanvas icon={"./astro.png"} text={"CEO"} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Members;
