import { useFrame, useThree } from '@react-three/fiber';
import { useSphere } from '@react-three/cannon';
import { useRef } from 'react';
import { Vector3 } from 'three'

export const Player = () => {
  const { camera } = useThree(); // define camera

  // get a ref to the physics box representation - use useSphere() then give it a callback, from this callback
  // we return an object that has props: position, type, mass (it will now be affected by gravity)
  const [ref] = useSphere(() =>({
    mass: 1,
    type: 'Dynamic',
    position:[0, 0, 0]
  }));

  // React useRef hook - persist values between renders, no re-render when updated.
  const position = useRef([0, 0, 0]); // initiate and store the position of the player

  // @react-three/fiber useFrame hook - execute code on every rendered frame - callback function will be invoked just before a frame is rendered
  // attached camera to the position of the player
  useFrame(() => {
    // camera.position.copy(new Vector3(
    //   position.current[0],
    //   position.current[1],
    //   position.current[2]
    //   ))
  });

  return (
    // define mesh
    // tie mesh to the reference you have just received. It will now be affected by gravity 
    // and other objects inside the  world.
    <mesh ref={ref}></mesh>
  )
};