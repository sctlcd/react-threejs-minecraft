import { useBox } from '@react-three/cannon';
import * as textures from '../assets/images/textures';

export const Cube = ({ position, texture }) => {
  const [ref] = useBox(() => ({
    type: 'static',
    position
  }));

  const activeTexture = textures[texture + 'Texture'];
  console.log('activeTexture', activeTexture);

  return (
    <mesh ref={ref}>
      <boxBufferGeometry attac h="geometry" />
      <meshStandardMaterial map={activeTexture} attach="material" />
    </mesh>
  );
};