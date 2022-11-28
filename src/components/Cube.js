import { useBox } from "@react-three/cannon";
import * as textures from "../assets/js/textures";
import { useStore } from "../hooks/useStore";
import { useState } from "react";

export const Cube = ({ position, texture }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [ref] = useBox(() => ({
    type: "Static",
    position,
  }));

  const [addCube, removeCube] = useStore((state) => [
    state.addCube,
    state.removeCube,
  ]);

  const activeTexture = textures[texture + "Texture"];

  return (
    <mesh
      onPointerMove={(e) => {
        e.stopPropagation();
        setIsHovered(true);
      }}
      onPointerOut={(e) => {
        e.stopPropagation();
        setIsHovered(false);
      }}
      onClick={(e) => {
        // stop propagation
        e.stopPropagation();
        // a face is composed of 2 triangles which form a square
        // a cube has 6 faces = 6 squares = 12 triangles
        const clickedFace = Math.floor(e.faceIndex / 2);
        console.log("clickedFace", clickedFace);

        const { x, y, z } = ref.current.position;

        if (e.altKey) {
          removeCube(x, y, z);
          return;
        }
        switch (clickedFace) {
          case 0: {
            addCube(x + 1, y, z);
            break;
          }
          case 1: {
            addCube(x - 1, y, z);
            break;
          }
          case 2: {
            addCube(x, y + 1, z);
            break;
          }
          case 3: {
            addCube(x, y - 1, z);
            break;
          }
          case 4: {
            addCube(x, y, z + 1);
            break;
          }
          case 5: {
            addCube(x - 1, y, z - 1);
            break;
          }
          default:
            break;
        }
      }}
      ref={ref}
    >
      <boxBufferGeometry attach="geometry" />
      <meshStandardMaterial
        color={isHovered ? "#d4d4d4" : "white"}
        map={activeTexture}
        transparent={true}
        opacity={texture === "glass" ? 0.6 : 1}
        attach="material"
      />
    </mesh>
  );
};
