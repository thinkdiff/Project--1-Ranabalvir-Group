"use client";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Environment, Float } from "@react-three/drei";
import * as THREE from "three";

export function HeroGear() {
  const group = useRef<THREE.Group>(null);
  const mesh = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (group.current) {
      // Parallax effect based on mouse movement
      group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, (state.pointer.y * Math.PI) / 8, 0.05);
      group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, (state.pointer.x * Math.PI) / 8, 0.05);
    }
    if (mesh.current) {
      mesh.current.rotation.z += 0.002;
      mesh.current.rotation.x += 0.001;
    }
  });

  return (
    <group ref={group}>
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
        {/* Core stylized industrial mesh */}
        <mesh ref={mesh}>
          <torusKnotGeometry args={[1.8, 0.5, 128, 32]} />
          <meshStandardMaterial 
            color="#C9A84C"
            metalness={0.9}
            roughness={0.15}
            envMapIntensity={1.5}
          />
        </mesh>
        
        {/* Outer Ring 1 (Steel Blue) */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[3.2, 0.05, 16, 100]} />
          <meshStandardMaterial color="#2A6EBB" metalness={0.8} roughness={0.2} />
        </mesh>
        
        {/* Outer Ring 2 (Ghost White) */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[3.6, 0.02, 16, 100]} />
          <meshStandardMaterial color="#F5F5F5" opacity={0.3} transparent />
        </mesh>
      </Float>

      {/* Industrial reflections */}
      <Environment preset="warehouse" />
      
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={2} color="#C9A84C" />
      <directionalLight position={[-10, -10, -5]} intensity={1} color="#2A6EBB" />
    </group>
  );
}
