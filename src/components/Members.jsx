import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import React from "react";

const Members = () => {
  return (
    <section id="Members">
      <h1 className="text-center text-gray-200 text-4xl font-bold pt-2">
        OUR MEMBERS
      </h1>
      <div className="flex w-full items-center justify-center h-[80%]">
        <div className="flex w-[90%] flex-wrap gap-[50px] justify-center py-5">
          <div className="sm:w-52  sm:h-52  w-[40%] object-cover rounded-full cursor-pointer relative">
            <Canvas>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={[1, 100, 200]} scale={2.3}>
                <MeshDistortMaterial
                  color="#3d1c56"
                  attach="material"
                  distort={0.5}
                  speed={2}
                />
              </Sphere>
            </Canvas>
            <img className="member_img" src="./astro.png" />
          </div>
          <div className="sm:w-52  sm:h-52  w-[40%] object-cover rounded-full cursor-pointer relative">
            <Canvas>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={[1, 100, 200]} scale={2.3}>
                <MeshDistortMaterial
                  color="#3d1c56"
                  attach="material"
                  distort={0.5}
                  speed={2}
                />
              </Sphere>
            </Canvas>
            <img className="member_img" src="./astro.png" />
          </div>
          <div className="sm:w-52  sm:h-52  w-[40%] object-cover rounded-full cursor-pointer relative">
            <Canvas>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={[1, 100, 200]} scale={2.3}>
                <MeshDistortMaterial
                  color="#3d1c56"
                  attach="material"
                  distort={0.5}
                  speed={2}
                />
              </Sphere>
            </Canvas>
            <img className="member_img" src="./astro.png" />
          </div>
          <div className="sm:w-52  sm:h-52  w-[40%] object-cover rounded-full cursor-pointer relative">
            <Canvas>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={[1, 100, 200]} scale={2.3}>
                <MeshDistortMaterial
                  color="#3d1c56"
                  attach="material"
                  distort={0.5}
                  speed={2}
                />
              </Sphere>
            </Canvas>
            <img className="member_img" src="./astro.png" />
          </div>
          <div className="sm:w-52  sm:h-52  w-[40%] object-cover rounded-full cursor-pointer relative">
            <Canvas>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={[1, 100, 200]} scale={2.3}>
                <MeshDistortMaterial
                  color="#3d1c56"
                  attach="material"
                  distort={0.5}
                  speed={2}
                />
              </Sphere>
            </Canvas>
            <img className="member_img" src="./astro.png" />
          </div>
          <div className="sm:w-52  sm:h-52  w-[40%] object-cover rounded-full cursor-pointer relative">
            <Canvas>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={[1, 100, 200]} scale={2.3}>
                <MeshDistortMaterial
                  color="#3d1c56"
                  attach="material"
                  distort={0.5}
                  speed={2}
                />
              </Sphere>
            </Canvas>
            <img className="member_img" src="./astro.png" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Members;
