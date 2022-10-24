import { useBox } from '@react-three/cannon';

export const Cube = ({ position, texture }) => {
  const [ref] = useBox(() => ({
    type: 'static',
    position
  }));

  return (
    <mesh ref={ref}>
      <boxBufferGeometry attach="geometry" />
      <meshStandardMaterial color="red" attach="material" />
    </mesh>
  );
};