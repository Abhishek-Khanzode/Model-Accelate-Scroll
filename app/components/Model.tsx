"use client";

import { Center, Environment, useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { Suspense, useRef, useState } from "react";
import { useLenis } from "lenis/react";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

const ModelMesh = ({ scrollprogress }) => {
  const { scene } = useGLTF("/stone.glb");
  const groupRef = useRef(null);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y = scrollprogress * Math.PI * 2;
    }
  });

  return (
    <group ref={groupRef}>
      <primitive scale={0.11} object={scene} />
    </group>
  );
};

const Model = () => {
  const [scrollprogress, setscrollprogress] = useState(0);

  useLenis(({ progress }) => {
    setscrollprogress(progress);
  });

  return (
    <section className="h-screen w-full">
      <Canvas
        camera={{ position: [0, 0, 28], fov: 500 }}
        gl={{ antialias: true }}
      >
        {/* Lights */}
        <ambientLight intensity={0.4} />
        {/* <directionalLight position={[10, 10, 5]} intensity={2} /> */}

        {/* <Environment preset="sunset" environmentIntensity={0.6} /> */}

        <Suspense fallback={null}>
          <mesh position={[0, -7, 0]} rotation={[0, Math.PI, 0]}>
            <Center>
              <ModelMesh scrollprogress={scrollprogress} />
            </Center>
          </mesh>
        </Suspense>

        {/* Post Processing */}
        <EffectComposer>
          <Bloom
            intensity={12.2}        // strength of bloom
            luminanceThreshold={0.0}
            luminanceSmoothing={0.1}
            mipmapBlur
          />
        </EffectComposer>
      </Canvas>
    </section>
  );
};

export default Model;
