'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, MeshDistortMaterial } from '@react-three/drei';
import { useRef, Suspense } from 'react';
import * as THREE from 'three';

/**
 * WatchCars 3D Hero — Calibre mécanique rotatif
 * Bronze patiné · Cuivre · Encre — Mouvement de précision
 */

function Calibre() {
  const groupRef = useRef();
  const outerRef = useRef();
  const midRef = useRef();
  const innerRef = useRef();
  const handsRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const { x, y } = state.mouse;
    if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y, x * 0.4, 0.05
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x, -y * 0.25, 0.05
      );
      groupRef.current.position.y = Math.sin(t * 0.6) * 0.15;
    }
    if (outerRef.current) outerRef.current.rotation.z = t * 0.08;
    if (midRef.current) midRef.current.rotation.z = -t * 0.15;
    if (innerRef.current) {
      innerRef.current.rotation.z = t * 0.3;
      innerRef.current.rotation.x = t * 0.2;
    }
    if (handsRef.current) handsRef.current.rotation.z = -t * 0.5;
  });

  return (
    <group ref={groupRef} scale={1.6}>
      {/* Outer ring — calibre bezel */}
      <mesh ref={outerRef}>
        <torusGeometry args={[1.5, 0.08, 32, 200]} />
        <meshStandardMaterial color="#8B6F47" metalness={1} roughness={0.22} envMapIntensity={1.3} />
      </mesh>

      {/* Tick markers */}
      {[...Array(24)].map((_, i) => {
        const angle = (i / 24) * Math.PI * 2;
        return (
          <mesh
            key={i}
            position={[Math.cos(angle) * 1.4, Math.sin(angle) * 1.4, 0]}
            rotation={[0, 0, angle]}
          >
            <boxGeometry args={[0.04, i % 6 === 0 ? 0.14 : 0.08, 0.04]} />
            <meshStandardMaterial
              color={i % 6 === 0 ? '#E8D4A8' : '#C9A876'}
              metalness={1}
              roughness={0.3}
            />
          </mesh>
        );
      })}

      {/* Mid ring — copper accent */}
      <mesh ref={midRef}>
        <torusGeometry args={[1.1, 0.05, 24, 160]} />
        <meshStandardMaterial
          color="#B8763D"
          metalness={0.9}
          roughness={0.28}
          emissive="#B8763D"
          emissiveIntensity={0.18}
        />
      </mesh>

      {/* Inner core — mechanical heart */}
      <mesh ref={innerRef}>
        <icosahedronGeometry args={[0.55, 4]} />
        <MeshDistortMaterial
          color="#1A1A1D"
          metalness={0.9}
          roughness={0.18}
          distort={0.32}
          speed={1.4}
          emissive="#8B6F47"
          emissiveIntensity={0.06}
        />
      </mesh>

      {/* Watch hands */}
      <group ref={handsRef}>
        <mesh position={[0, 0, 0.3]}>
          <boxGeometry args={[0.06, 0.7, 0.02]} />
          <meshStandardMaterial color="#E8D4A8" metalness={1} roughness={0.15} />
        </mesh>
        <mesh position={[0, 0, 0.4]} rotation={[0, 0, -Math.PI / 3]}>
          <boxGeometry args={[0.04, 1.0, 0.02]} />
          <meshStandardMaterial color="#E8D4A8" metalness={1} roughness={0.2} />
        </mesh>
        <mesh position={[0, 0, 0.45]}>
          <sphereGeometry args={[0.07, 24, 24]} />
          <meshStandardMaterial
            color="#E8D4A8" metalness={1} roughness={0.1}
            emissive="#E8D4A8" emissiveIntensity={0.3}
          />
        </mesh>
      </group>

      {/* Crown */}
      <mesh position={[1.55, 0, 0]}>
        <cylinderGeometry args={[0.08, 0.08, 0.18, 16]} />
        <meshStandardMaterial color="#8B6F47" metalness={1} roughness={0.3} />
      </mesh>
    </group>
  );
}

function WaterParticles() {
  const pointsRef = useRef();
  const count = 500;
  const positions = new Float32Array(count * 3);
  const speeds = new Float32Array(count);
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 14;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    speeds[i] = 0.2 + Math.random() * 0.6;
  }
  useFrame((state) => {
    if (!pointsRef.current) return;
    const pos = pointsRef.current.geometry.attributes.position.array;
    for (let i = 0; i < count; i++) {
      pos[i * 3 + 1] -= speeds[i] * 0.008;
      if (pos[i * 3 + 1] < -7) pos[i * 3 + 1] = 7;
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });
  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.04} color="#2DD4BF" transparent opacity={0.35} sizeAttenuation />
    </points>
  );
}

export function Scene3D() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5.5], fov: 45 }} dpr={[1, 2]} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={0.35} />
        <directionalLight position={[5, 5, 5]} intensity={1.3} color="#E8D4A8" />
        <directionalLight position={[-5, -3, 3]} intensity={0.5} color="#B8763D" />
        <pointLight position={[0, 0, 3]} intensity={0.4} color="#C9A876" />
        <Suspense fallback={null}>
          <Float speed={1.4} rotationIntensity={0.2} floatIntensity={0.4}>
            <Calibre />
          </Float>
          <WaterParticles />
          <Environment preset="warehouse" />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default Scene3D;
