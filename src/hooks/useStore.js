// state management
import create from 'zustand'
// id generator
import { nanoid } from 'nanoid'

export const useStore = create((set) => ({
  // texture
  texture: 'log',
  // array of cubes
  cubes: [
    {
      key: nanoid(),
      pos: [ 0, 0.5, -3],
      texture: 'dirt',
    },
    {
      key: nanoid(),
      pos: [ 2, 0.5, -4],
      texture: 'wood',
    }
    ,
    {
      key: nanoid(),
      pos: [ 4, 0.5, -5],
      texture: 'glass',
    }
  ],
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