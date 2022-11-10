import { useEffect, useState } from 'react';
import { useStore } from '../hooks/useStore';
import { useKeyboard } from '../hooks/useKeyboard';
import {
  dirtImg, 
  grassImg, 
  glassImg, 
  woodImg, 
  logImg,
  brikImg,
  lavaImg,
  sandImg,
  stoneImg,
  // waterImg
} from '../assets/js/images';

const images = {
  dirt: dirtImg,
  grass: grassImg,
  glass: glassImg,
  wood: woodImg,
  log: logImg,
  brik: brikImg,
  lava: lavaImg,
  sand: sandImg,
  stone: stoneImg,
  // water: waterImg
};

export const TextureSelector = () => {
  const [visible, setVisible] = useState(false);
  const [activeTexture, setTexture] = useStore((state) => [state.texture, state.setTexture]); 
  const { 
    dirt,
    grass,
    glass,
    wood,
    log,
    brik,
    lava,
    sand,
    stone
  } = useKeyboard();

  // if setTexture, dirt, grass, glass, wood, log change the pressedTexture is set to the texture
  useEffect(() => {
    const textures = { 
      dirt,
      grass,
      glass,
      wood,
      log,
      brik,
      lava,
      sand,
      stone
    }; 

    // if any of the textures are true then the texture will be the pressed texture
    const pressedTexture = Object.entries(textures).find(([k, v]) => v);
    // if pressedTexture is true setTexture to pressedTexture
    if (pressedTexture) {
      setTexture(pressedTexture[0]);
    }
  }, [setTexture, dirt, grass, glass, wood, log, brik, lava, sand, stone]);

  // if activeTexture changes we want to have this texture selector visible for 2s then we want it to disappear
  useEffect(() => {
    const visibilityTimeout = setTimeout(() => {
      setVisible(false);
    }, 2000); 
    setVisible(true);
    return () => {
      clearTimeout(visibilityTimeout);
    }
  }, [activeTexture]);

    return visible && (
      <div className="absolute texture-selector">
        {Object.entries(images).map(([k, src]) => {
          return (<img 
            key={k}
            src={src}
            alt={k}
            className={`${k === activeTexture ? 'active' : ''}`}
          />)
        })}
      </div>
    )

};