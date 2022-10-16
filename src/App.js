// useful helpers for react-three-fiber
import { Sky, Cloud, OrbitControls } from '@react-three/drei';
// a React renderer for Three.js
import { Canvas } from '@react-three/fiber';
// physics library 'cannon' - physics based hooks
import { Physics } from '@react-three/cannon'; 
import { Ground } from './components/Ground';

import './App.css';

function App() {
  return (
    <>
      {/* Canvas component: sets up a Scene and a Camera (basic building blocks necessary for rendering)
      and renders our scene every frame (no need for traditional render-loop) */}
      <Canvas>
        {/* Orbit controls allow the camera to orbit around a target. */}
        <OrbitControls zoomSpeed={0.5}/> {/* define Orbit controls*/}
        <Sky 
          distance={450000}
          sunPosition={[8, 1, 8]}
          inclination={0}
          azimuth={0.25}
        /> {/* define Sky */}
        {/* <Cloud
          args={[3, 2]}
          opacity={0.1}
          speed={0.4} // Rotation speed
          width={10} // Width of the full cloud
          depth={1.5} // Z-dir depth
          segments={400} // Number of particles
        /> define Cloud */}
        <ambientLight intensity={0.5} /> {/* define ambientLight */}
        <Physics> {/* create a physics world */}
          <Ground /> {/* define Ground */}
        </Physics>
      </Canvas>
    </>
  );
}

export default App;
