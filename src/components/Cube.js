import { useBox } from '@react-three/cannon';
import * as textures from '../assets/images/textures';
import { useStore } from '../hooks/useStore';

export const Cube = ({ position, texture }) => {
  const [ref] = useBox(() => ({
    type: 'Static',
    position
  }));

  const [addCube, removeCube] = useStore((state) => [state.addCube, state.removeCube]);

  const activeTexture = textures[texture + 'Texture'];
  console.log('activeTexture', activeTexture);

  return (
    <mesh 
    onClick={(e) => {
      // stop propagation
      e.stopPropagation();
      // a face is composed of 2 triangles which form a square
      // a cube has 6 faces = 6 squares = 12 triangl   es
      const clickedFace = Math.floor(e.faceIndex / 2);
      console.log('clickedFace', clickedFace);
      
      const { x, y, z } = ref.current.position;

      if (clickedFace === 0) {
        addCube(x + 1, y, z);
      }
      if (clickedFace === 1) {
        addCube(x - 1, y, z);
      }
      if (clickedFace === 2) {
        addCube(x, y + 1, z);
      }
      if (clickedFace === 3) {
        addCube(x, y - 1, z);
      }
      if (clickedFace === 4) {
        addCube(x, y, z + 1);
      }
      if (clickedFace === 5) {
        addCube(x, y, z - 1);
      }
    }}
    ref={ref}
    >
      <boxBufferGeometry attac h="geometry" />
      <meshStandardMaterial map={activeTexture} attach="material" />
    </mesh>
  );
};