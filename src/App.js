// useful helpers for react-three-fiber
import { Sky, Cloud } from "@react-three/drei";
// a React renderer for Three.js
import { Canvas } from "@react-three/fiber";
// physics library 'cannon' - physics based hooks
import { Physics } from "@react-three/cannon";
import { Ground } from "./components/Ground";
import { Player } from "./components/Player";
import { FPV } from "./components/FPV";
import { Cubes } from "./components/Cubes";
import { TextureSelector } from "./components/TextureSelector";
import { Menu } from "./components/Menu";
import { Controls } from "./components/Controls";

function App() {
  return (
    <>
      {/* Canvas component: sets up a Scene and a Camera (basic building blocks necessary for rendering)
      and renders our scene every frame (no need for traditional render-loop) */}
      <Canvas>
        {/* define Sky */}
        <Sky
          distance={450000}
          sunPosition={[15, 2, 20]}
          inclination={0}
          azimuth={0.25}
        />{" "}
        {/* define Cloud */}
        <Cloud
          args={[10, 4]}
          opacity={0.3}
          speed={0.5} // Rotation speed
          width={100} // Width of the full cloud
          depth={1.5} // Z-dir depth
          segments={300} // Number of particles
        />{" "}
        {/* define ambientLight */}
        <ambientLight intensity={0.5} />
        {/* define First Person View */}
        <FPV />
        {/* create a physics world */}
        <Physics>
          <Player />
          <Cubes />
          <Ground />
        </Physics>
      </Canvas>
      <div className="absolute centered cursor">+</div>
      <TextureSelector />
      <Menu />
      <Controls />
    </>
  );
}

export default App;
