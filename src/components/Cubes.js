import { useStore } from '../hooks/useStore';
import { Cube } from '../components/Cube';

export const Cubes = () => {
  const [cubes] = useStore((state) => [
    state.cubes
  ]);
  console.log(cubes);
  return cubes.map(({ key, pos, texture }) => {
    return (
      <Cube key={key} position={pos} texture={texture} />
    )
  })
};