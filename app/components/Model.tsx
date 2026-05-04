"use client";

import { Center, useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { Suspense, useRef, useState } from "react";
import { useLenis } from "lenis/react";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";

interface ModelMeshProps {
  scrollprogress: number;
}

const ModelMesh = ({ scrollprogress }: ModelMeshProps) => {
  const { scene } = useGLTF("/stone.glb");
  const groupRef = useRef<THREE.Group | null>(null);

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
  const [scrollprogress, setscrollprogress] = useState<number>(0);

  useLenis(({ progress }: { progress: number }) => {
    setscrollprogress(progress);
  });

  return (
    <section className="h-screen w-full">
      <Canvas
        camera={{ position: [0, 0, 28], fov: 50 }} // ⚠️ also fixed this (500 → 50)
        gl={{ antialias: true }}
      >
        <ambientLight intensity={0.4} />

        <Suspense fallback={null}>
          <mesh position={[0, -7, 0]} rotation={[0, Math.PI, 0]}>
            <Center>
              <ModelMesh scrollprogress={scrollprogress} />
            </Center>
          </mesh>
        </Suspense>

        <EffectComposer>
          <Bloom
            intensity={12.2}
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