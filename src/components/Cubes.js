import { useStore } from '../hooks/useStore';

export const Cubes = () => {
  const [cubes] = useStore((state) => [
    state.cubes
  ]);
  console.log(cubes);
};