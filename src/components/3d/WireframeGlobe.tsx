"use client";
import { useRef } from "react";
import { useFrame, Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import * as THREE from "three";

function Globe() {
  const mesh = useRef<THREE.Mesh>(null);
  const mesh2 = useRef<THREE.Mesh>(null);
  
  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.y += 0.001;
      mesh.current.rotation.x += 0.0005;
    }
    if (mesh2.current) {
      mesh2.current.rotation.y -= 0.0008;
      mesh2.current.rotation.z += 0.0004;
    }
  });

  return (
    <group>
      <mesh ref={mesh}>
        <icosahedronGeometry args={[3, 2]} />
        <meshBasicMaterial color="#2A6EBB" wireframe transparent opacity={0.15} />
      </mesh>
      <mesh ref={mesh2} scale={1.1}>
        <icosahedronGeometry args={[3, 1]} />
        <meshBasicMaterial color="#C9A84C" wireframe transparent opacity={0.08} />
      </mesh>
    </group>
  );
}

export function WireframeGlobe() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden mix-blend-screen">
      <Canvas camera={{ position: [0, 0, 6], fov: 60 }}>
        <Suspense fallback={null}>
          <Globe />
        </Suspense>
      </Canvas>
    </div>
  );
}
