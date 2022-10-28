import { useEffect, useState } from 'react';
import { useStore } from '../hooks/useStore';

export const Texture= () => {
  const [visible, setVisible] = useState(false);
  const [activeTexture] = useStore((state) => [state.texture]); 

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
      <div className="absolute centered">TextureSelector</div>
    )

};