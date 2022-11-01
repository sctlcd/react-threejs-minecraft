// useful helpers for react-three-fiber
import { Sky, Cloud } from '@react-three/drei';
// a React renderer for Three.js
import { Canvas } from '@react-three/fiber';
// physics library 'cannon' - physics based hooks
import { Physics } from '@react-three/cannon'; 
import { Ground } from './components/Ground';
import { Player } from './components/Player';
import { FPV } from './components/FPV';
import { Cubes } from './components/Cubes';
import { TextureSelector } from './components/TextureSelector';
import { Menu } from './components/Menu';

import './App.css';

function App() {
  return (
    <>
      {/* Canvas component: sets up a Scene and a Camera (basic building blocks necessary for rendering)
      and renders our scene every frame (no need for traditional render-loop) */}
      <Canvas>
        <Sky 
          distance={450000}
          sunPosition={[15, 2, 20]}
          inclination={0}
          azimuth={0.25}
        /> {/* define Sky */}
        <Cloud
          args={[10, 2]}
          opacity={0.3}
          speed={0.4} // Rotation speed
          width={100} // Width of the full cloud
          depth={1.5} // Z-dir depth
          segments={300} // Number of particles
        /> {/* define Cloud */}
        <ambientLight intensity={0.5} /> {/* define ambientLight */}
        <FPV />
        <Physics> {/* create a physics world */}
          <Player /> {/* define Player */}
          <Cubes /> {/* define Cubes */}
          <Ground /> {/* define Ground */}
        </Physics>
      </Canvas>
      <div className='absolute centered cursor'>+</div>
      <TextureSelector />
      <Menu />
    </>
  );
}

export default App;
