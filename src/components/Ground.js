import { usePlane } from '@react-three/cannon';
import { groundTexture } from '../images/textures';

export const Ground = () => {
  // @react-three/cannon usePlane hook
  // usePlane is physics-only, it comes from the physics library 'cannon'.
  // It approximates a shape and links it to arbitrary geometry. The physics
  // engine now manages a literal box, a plane, and subjects it to gravity and other.
  // Pick a shape that suits your objects contact surface, it could be a box, plane, sphere, etc.
  // (if your shape resembles something like a sphere you'd use useSphere instead and so on.) 
  // Give it a mass.
  // get a ref to the physics box representation - use usePlane() then give it a callback, from this callback
  // we return an object that has props: position, rotation, mass (it will now be affected by gravity)
  const [ref] = usePlane(() => ({ 
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, 0, 0],
  }));

  groundTexture.repeat.set(100, 100); // how many times the texture is repeated across the surface, in each direction U and V

  return (
    // define mesh
    // tie mesh to the reference you have just received. It will now be affected by gravity 
    // and other objects inside the  world.
    <mesh
      ref={ref}
    >
      <planeBufferGeometry attach='geometry' args={[100, 100]} /> {/* define planeBufferGeometry */}
      <meshStandardMaterial attach='material' map={groundTexture} />  {/* define meshStandardMaterial */}
    </mesh>
  )
}; 