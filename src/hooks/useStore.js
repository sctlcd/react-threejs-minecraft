// state management
import create from 'zustand'
// id generator
import { nanoid } from 'nanoid'

export const useStore = create((set) => ({
  // texture
  texture: 'log',
  // array of cubes
  cubes: [],
  // methods to interact with the state 
  addCube: (x, y, z) => {
    set((prev) => ({
      cubes: [
        ...prev.cubes,
        {
          key: nanoid(),
          pos: [x, y, z],
          texture: prev.texture
        }
      ]
    }))
  },
  removeCube: () => {},
  setTexture:() => {},
  saveWorld:() => {},
  resetWorld: () => {},
}));