"use client";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { HeroGear } from "./HeroGear";

export function HeroGearCanvas() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <Suspense fallback={null}>
          <HeroGear />
        </Suspense>
      </Canvas>
    </div>
  );
}
