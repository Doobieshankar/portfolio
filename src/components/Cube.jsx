/* import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import { Float, useGLTF, useTexture } from "@react-three/drei";
import PropTypes from "prop-types";
const Cube = ({ ...props }) => {
  const cubeRef = useRef();
  const { nodes } = useGLTF("./models/cube.glb");
  useTexture.preload("textures/cube.png");
  const texture = useTexture("/textures/cube.png");
  const [hovered, setHovered] = useState(false);

  useGSAP(() => {
    gsap
      .timeline({
        repeat: -1,
        repeatDelay: 0.5,
      })
      .to(cubeRef.current.rotation, {
        y: hovered ? "+=2" : `+=${Math.PI * 2}`,
        x: hovered ? "+=2" : `-=${Math.PI * 2}`,
        duration: 2.5,
        stagger: {
          each: 0.15,
        },
      });
  });

  return (
    <Float floatIntensity={2}>
      <group
        position={[9, -4, 0]}
        rotation={[2.6, 0.8, -1.8]}
        scale={0.74}
        dispose={null}
        {...props}
      >
        <mesh
          ref={cubeRef}
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          material={nodes.Cube.material}
          onPointerEnter={() => setHovered(true)}
        >
          <meshMatcapMaterial matcap={texture} toneMapped={false} />
        </mesh>
      </group>
    </Float>
  );
};

useGLTF.preload("models/cube.glb");
useTexture.preload("textures/cube.png");

Cube.propTypes = {
  //animationName: PropTypes.string.isRequired,
  position: PropTypes.array.isRequired,
};

export default Cube;
 */

import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { Float, useGLTF, useTexture } from "@react-three/drei";
import PropTypes from "prop-types";

const Cube = ({ position = [9, -4, 0], ...props }) => {
  const cubeRef = useRef();
  const { nodes } = useGLTF("/models/cube.glb");
  const texture = useTexture("/textures/cube.png");
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    // GSAP animation setup
    const timeline = gsap.timeline({
      repeat: -1,
      repeatDelay: 0.5,
    });

    timeline.to(cubeRef.current.rotation, {
      y: hovered ? "+=2" : `+=${Math.PI * 2}`,
      x: hovered ? "+=2" : `-=${Math.PI * 2}`,
      duration: 2.5,
      stagger: {
        each: 0.15,
      },
    });

    return () => {
      timeline.kill(); // Clean up GSAP timeline
    };
  }, [hovered]);

  return (
    <Float floatIntensity={2}>
      <group
        position={position}
        rotation={[2.6, 0.8, -1.8]}
        scale={0.74}
        dispose={null}
        {...props}
      >
        <mesh
          ref={cubeRef}
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          material={nodes.Cube.material}
          onPointerEnter={() => setHovered(true)}
          onPointerLeave={() => setHovered(false)}
        >
          <meshMatcapMaterial matcap={texture} toneMapped={false} />
        </mesh>
      </group>
    </Float>
  );
};

// Preload resources outside the component
useGLTF.preload("/models/cube.glb");
useTexture.preload("/textures/cube.png");

// Prop validation
Cube.propTypes = {
  position: PropTypes.array, // Position is now optional
};

export default Cube;
