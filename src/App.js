// useful helpers for react-three-fiber
import { Sky, Cloud, OrbitControls } from '@react-three/drei';
// a React renderer for Three.js
import { Canvas } from '@react-three/fiber';
// physics library 'cannon' - physics based hooks
import { Physics } from '@react-three/cannon'; 
import { Ground } from './components/Ground';
import { Player } from './components/Player';
import { FPV } from './components/FPV';
import { Cubes } from './components/Cubes';

import './App.css';

function App() {
  return (
    <>
      {/* Canvas component: sets up a Scene and a Camera (basic building blocks necessary for rendering)
      and renders our scene every frame (no need for traditional render-loop) */}
      <Canvas>
        {/* Orbit controls allow the camera to orbit around a target. */}
        {/* <OrbitControls zoomSpeed={0.5}/> define Orbit controls */}
        <Sky 
          // sunPosition={[100, 100, 20]}
          distance={450000}
          sunPosition={[15, 2, 6]}
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
        <FPV />
        <Physics> {/* create a physics world */}
          <Player /> {/* define Player */}
          <Cubes /> {/* define Cubes */}
          <Ground /> {/* define Ground */}
        </Physics>
      </Canvas>
      <div className='absolute centered cursor'>+</div>
    </>
  );
}

export default App;
