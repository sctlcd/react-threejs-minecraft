import { Sky, Cloud, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import './App.css';

function App() {
  return (
    <>
      <Canvas>
        <OrbitControls zoomSpeed={0.5}/> {/* define Orbit controls*/}
        <Sky 
          distance={450000}
          sunPosition={[8, 1, 8]}
          inclination={0}
          azimuth={0.25}
        /> {/* define Sky */}
        <Cloud
          args={[3, 2]}
          opacity={0.1}
          speed={0.4} // Rotation speed
          width={10} // Width of the full cloud
          depth={1.5} // Z-dir depth
          segments={400} // Number of particles
        /> {/* define Cloud */}
      </Canvas>
    </>

  );
}

export default App;
