import { useFrame, useThree } from '@react-three/fiber';
import { useSphere } from '@react-three/cannon';
import { useRef, useEffect } from 'react';
import { Vector3 } from '/node_modules/three/build/three.module.js'
import { useKeyboard } from '../hooks/useKeyboard';

const JUMP_FORCE = 4;
const SPEED = 4;

export const Player = () => {
  const { moveBackward, 
          moveForward, 
          moveLeft,
          moveRight,
          jump 
  } = useKeyboard();

  // @react-three/fiber useThree hook
  // give access to the state model which contains the default renderer, the scene, 
  // your camera, the current size of the canvas in screen and viewport coordinates
  const { camera } = useThree(); // initiate camera

  // @react-three/cannon useSphere hook
  // get a ref to the physics box representation - use useSphere() then give it a callback, 
  // from this callback we return an object that has props: position, type, mass. 
  // The sphere is affected by physics and gravity
  const [ref, api] = useSphere(() =>({
    mass: 1,
    type: 'Dynamic',
    position:[4, 1, 0]
  }));

  // React useRef hook - persist values between renders, no re-render when updated.
  // This position reference follows the sphere
  const pos = useRef([0, 0, 0]); // initiate the position

  // React useEffect hook
  // Subscribes to the api position changes of the sphere and runs on the first render and 
  // any time the sphere api position changes. (p being a triplet [x,x,x])
  useEffect(() => {
    api.position.subscribe((p) => pos.current = p)
  }, [api.position]);

  // React useRef hook
  // This velocity reference follows the sphere
  const vel = useRef([0, 0, 0]); // initiate the velocity

  // React useEffect hook
  // Subscribes to the api velocity changes of the sphere and runs on the first render and 
  // any time the sphere api velocity changes. (v being a triplet [x,x,x])
  useEffect(() => {
    api.velocity.subscribe((v) => vel.current = v)
  }, [api.velocity]);
   
  // @react-three/fiber useFrame hook - execute code on every rendered frame - callback function 
  // will be invoked just before a frame is rendered
  // The camera follows the sphere via the position reference for every frames.
  useFrame(() => {
    camera.position.copy(new Vector3( 
      pos.current[0], 
      pos.current[1], 
      pos.current[2]
    ));

    const direction = new Vector3();

    const frontVector = new Vector3(
      0,
      0,
      (moveBackward ? 1 : 0) - (moveForward ? 1 : 0)
    );
 
    const sideVector = new Vector3(
      (moveLeft ? 1 : 0) - (moveRight ? 1 : 0),
      0,
      0
    );

    direction.subVectors(frontVector, sideVector)
      .normalize()
      .multiplyScalar(SPEED) 
      .applyEuler(camera.rotation);

    api.velocity.set(direction.x, vel.current[1], direction.z)

    if (jump && Math.abs(vel.current[1]) < 0.01) {
      api.velocity.set(vel.current[0], JUMP_FORCE, vel.current[2]);
    }
  });

  return (
    // define mesh
    // tie mesh to the reference. It will now be affected by gravity and other objects inside the  world.
    <mesh 
      ref={ref}
    ></mesh>
  )
};