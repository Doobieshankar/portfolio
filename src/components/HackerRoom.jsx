import { useGLTF, useTexture } from "@react-three/drei";

const HackerRoom = (props) => {
  /*
    This is a React component named HackerRoom that renders a 3D model of a hacker room using the @react-three/drei library. The model is loaded from a glTF file (hacker-room.glb) and textured with images (monitor.png and screen.png). The component returns a group element containing multiple mesh elements, each representing a part of the room (e.g., screen, glass, table, computer, server, etc.). The mesh elements are configured with geometry, materials, and textures to create the 3D scene.
  */
  const { nodes, materials } = useGLTF("/models/hacker-room.glb");

  const monitortxt = useTexture("/textures/desk/monitor.png");
  const screenTxt = useTexture("/textures/desk/screen.png");

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.screen_screens_0.geometry}
        material={materials.screens}
      >
        <meshMatcapMaterial map={screenTxt} />
      </mesh>
      <mesh
        geometry={nodes.screen_glass_glass_0.geometry}
        material={materials.glass}
      />
      <mesh
        geometry={nodes.table_table_mat_0_1.geometry}
        material={materials.table_mat}
      />
      <mesh
        geometry={nodes.table_table_mat_0_2.geometry}
        material={materials.computer_mat}
      >
        <meshMatcapMaterial map={monitortxt} />
      </mesh>
      <mesh
        geometry={nodes.table_table_mat_0_3.geometry}
        material={materials.server_mat}
      />
      <mesh
        geometry={nodes.table_table_mat_0_4.geometry}
        material={materials.vhsPlayer_mat}
      />
      <mesh
        geometry={nodes.table_table_mat_0_5.geometry}
        material={materials.stand_mat}
      />
      <mesh
        geometry={nodes.table_table_mat_0_6.geometry}
        material={materials.mat_mat}
      />
      <mesh
        geometry={nodes.table_table_mat_0_7.geometry}
        material={materials.arm_mat}
      />
      <mesh
        geometry={nodes.table_table_mat_0_8.geometry}
        material={materials.tv_mat}
      >
        <meshMatcapMaterial map={monitortxt} />
      </mesh>
      <mesh
        geometry={nodes.table_table_mat_0_9.geometry}
        material={materials.cables_mat}
      />
      <mesh
        geometry={nodes.table_table_mat_0_10.geometry}
        material={materials.props_mat}
      />
      <mesh
        geometry={nodes.table_table_mat_0_11.geometry}
        material={materials.ground_mat}
      />
      <mesh
        geometry={nodes.table_table_mat_0_12.geometry}
        material={materials.key_mat}
      />
    </group>
  );
};

useGLTF.preload("/models/hacker-room.glb");
useTexture.preload("/textures/desk/monitor.png");
useTexture.preload("/textures/desk/screen.png");

export default HackerRoom;
