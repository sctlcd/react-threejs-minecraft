import { useThree } from '@react-three/fiber';
import { useSphere } from '@react-three/cannon';

export const Player = () => {
  const { camera } = useThree();
  const [ref] = useSphere(() =>({
    mass: 1,
    type: 'Dynamic',
    position:[0, 0, 0]
  }));

  return (
    <mesh ref={ref}></mesh>
  )
};