import { NearestFilter, TextureLoader, RepeatWrapping } from 'three';

import {
  dirtImg,
  logImg,
  grassImg,
  glassImg,
  woodImg
} from '../js/images';

const dirtTexture = new TextureLoader().load(dirtImg); {/* define dirtTexture and load dirtImg*/}
const logTexture = new TextureLoader().load(logImg);
const grassTexture = new TextureLoader().load(grassImg);
const glassTexture = new TextureLoader().load(glassImg);
const woodTexture = new TextureLoader().load(woodImg);
const groundTexture = new TextureLoader().load(grassImg);

// magFilter - how the texture is sampled when a texel covers more than one pixel
// NearestFilter - returns the value of the texture element that is nearest (in Manhattan distance) to the specified texture coordinates.
dirtTexture.magFilter = NearestFilter; 
logTexture.magFilter = NearestFilter;
grassTexture.magFilter = NearestFilter;
glassTexture.magFilter = NearestFilter;
woodTexture.magFilter = NearestFilter;
groundTexture.magFilter = NearestFilter;
// wrapS - defines how the texture is wrapped horizontally and corresponds to U in UV mapping
// RepeatWrapping - the texture will simply repeat to infinity
groundTexture.wrapS = RepeatWrapping;
// wrapT - defines how the texture is wrapped vertically and corresponds to V in UV mapping - 
// RepeatWrapping - the texture will simply repeat to infinity
groundTexture.wrapT = RepeatWrapping;

export {
  dirtTexture,
  logTexture,
  grassTexture,
  glassTexture,
  woodTexture,
  groundTexture
};