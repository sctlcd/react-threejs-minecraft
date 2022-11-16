import { useThree } from "@react-three/fiber";
import { PointerLockControls } from "@react-three/drei";

// First Person View
export const FPV = () => {
  const { camera, gl } = useThree(); // define camera

  return <PointerLockControls args={[camera, gl.domElement]} />;
};
