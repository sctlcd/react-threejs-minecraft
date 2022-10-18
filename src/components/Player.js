import { useFrame, useThree } from '@react-three/fiber';
import { useSphere } from '@react-three/cannon';
import { useRef, useEffect } from 'react';
import { Vector3 } from '/node_modules/three/build/three.module.js'

export const Player = () => {
  // @react-three/fiber useThree hook
  // give access to the state model which contains the default renderer, the scene, your camera,
  // the current size of the canvas in screen and viewport coordinates
  const { camera } = useThree(); // initiate camera

  // @react-three/cannon useSphere hook
  // get a ref to the physics box representation - use useSphere() then give it a callback, from this callback
  // we return an object that has props: position, type, mass (it will now be affected by gravity)
  const [ref, api] = useSphere(() =>({
    mass: 1,
    type: 'Dynamic',
    position:[0, 0, 0]
  }));

  // React useRef hook - persist values between renders, no re-render when updated.
  const position = useRef([0, 0, 0]); // initiate and store the position of the player

  useEffect(() => {
    api.position.subscribe((p) => position.current = p)
  }, [api.position]);
   
  // @react-three/fiber useFrame hook - execute code on every rendered frame - callback function will be invoked just before a frame is rendered
  // attached camera to the position of the player for every frames
  useFrame(() => {
    camera.position.copy(new Vector3(position.current[0], position.current[1], position.current[2]));
  });

  return (
    // define mesh
    // tie mesh to the reference you have just received. It will now be affected by gravity 
    // and other objects inside the  world.
    <mesh 
      ref={ref}
      position={[0, 0, 0]}
    ></mesh>
  )
};