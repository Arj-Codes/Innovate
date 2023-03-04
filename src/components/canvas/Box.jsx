import { OrbitControls } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import React from "react";
import { TextureLoader } from "three";
/* import texture from "../assets/starts.tif"; */
function Box() {
  /*  const startTexture = useLoader(TextureLoader, texture); */
  return (
    <Canvas>
      <OrbitControls enableZoom={false} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[-2, 5, 2]} intensity={1} />
      <mesh rotation={[90, 0, 20]}>
        <boxBufferGeometry args={[3, 3, 3]} scale={2}/>
        {/*  <meshLambertMaterial color="blue"/> */}
        <meshNormalMaterial />
      </mesh>
    </Canvas>
  );
}

export default Box;
