// state management
import create from 'zustand'
// id generator
import { nanoid } from 'nanoid'

const getLocalStorage = (key) => JSON.parse(window.localStorage.getItem(key));
const setLocalStorage = (key, value) => window.localStorage.setItem(key, JSON.stringify(value));

export const useStore = create((set) => ({
  // texture
  texture: 'dirt',
  // array of cubes
  cubes: getLocalStorage('cubes') || [],
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
  removeCube: (x, y, z) => {
    // console.log('remove', x, y, z);
    set((prev) => ({
      cubes: prev.cubes.filter(cube => {
        const [X, Y, Z] = cube.pos;
        return X !== x || Y !== y || Z !== z;
      })
    }));
  },
  // set texture based on the incoming texture
  setTexture: (texture) => {
    set(() => ({
      texture
    }));
  },
  saveWorld: () => {
		set((prev) => {
			setLocalStorage('cubes', prev.cubes)
		})
	},
	resetWorld: () => {
		set(() => ({
			cubes: []
		}))
	},
}));