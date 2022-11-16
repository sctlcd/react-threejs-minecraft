import { NearestFilter, TextureLoader, RepeatWrapping } from "three";

import {
  dirtImg,
  logImg,
  grassImg,
  glassImg,
  woodImg,
  brikImg,
  lavaImg,
  sandImg,
  stoneImg,
  waterImg,
} from "../js/images";

// define dirtTexture and load dirtImg, etc.
const dirtTexture = new TextureLoader().load(dirtImg);
const logTexture = new TextureLoader().load(logImg);
const grassTexture = new TextureLoader().load(grassImg);
const glassTexture = new TextureLoader().load(glassImg);
const woodTexture = new TextureLoader().load(woodImg);
const groundTexture = new TextureLoader().load(grassImg);
const brikTexture = new TextureLoader().load(brikImg);
const lavaTexture = new TextureLoader().load(lavaImg);
const sandTexture = new TextureLoader().load(sandImg);
const stoneTexture = new TextureLoader().load(stoneImg);
const waterTexture = new TextureLoader().load(waterImg);

// magFilter - how the texture is sampled when a texel covers more than one pixel
// NearestFilter - returns the value of the texture element that is nearest (in Manhattan distance) to the specified texture coordinates.
dirtTexture.magFilter = NearestFilter;
logTexture.magFilter = NearestFilter;
grassTexture.magFilter = NearestFilter;
glassTexture.magFilter = NearestFilter;
woodTexture.magFilter = NearestFilter;
brikTexture.magFilter = NearestFilter;
lavaTexture.magFilter = NearestFilter;
sandTexture.magFilter = NearestFilter;
stoneTexture.magFilter = NearestFilter;
waterTexture.magFilter = NearestFilter;
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
  groundTexture,
  brikTexture,
  lavaTexture,
  sandTexture,
  stoneTexture,
  waterTexture,
};
