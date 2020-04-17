import MapGenerator from './mapGenerator';
/**
 * z - default platform
 * s - start platform
 * f - finish platform
 * current max map size = 30x30
 */

// prettier-ignore
const template = [
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
];

// prettier-ignore
const training_level = [
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ','F',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ','#',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ','#',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ','#',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ','#',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ','#',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ','#',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ','S',' ',' ',' ',' ',' '],
];

// prettier-ignore
const map_01 = [
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ','#','#','#','#','F',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ','#',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ','#',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ','#',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ','#',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ','#',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ','#',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ','#',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ','S',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
];

// prettier-ignore
const map_02 = [
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ','S',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ','#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ','#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ','#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ','#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ','#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ','#','#','#','#','#',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ','#','#','#','#','F',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ','#',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ','#','#','#',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ','#',' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ','#',' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
];

// prettier-ignore
const map_03 = [
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','S',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#',' '],
  [' ',' ',' ',' ',' ',' ','#','#','#','#',' ',' ',' ','#',' '],
  [' ','#','#','#','#',' ','#',' ',' ','#',' ',' ',' ','#',' '],
  [' ',' ','#',' ','#',' ','#',' ',' ','#','#','#','#','#',' '],
  [' ',' ',' ',' ','#',' ','#',' ',' ',' ',' ',' ',' ','#',' '],
  [' ',' ',' ',' ','#',' ','#',' ',' ',' ',' ',' ',' ','#',' '],
  [' ','F',' ',' ','#','#','#','#','#','#','#','#','#','#',' '],
  [' ','#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#',' '],
  [' ','#','#','#',' ','#',' ',' ',' ',' ',' ',' ',' ','#',' '],
  [' ',' ',' ','#','#','#','#','#','#','#','#','#','#','#',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ','#',' ',' ',' ',' ','#',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ','#',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
];

// prettier-ignore
const map_04 = [
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ','#',' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ','#',' ',' ',' ',' ','F',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ','#',' ','#',' ',' ','#',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ','#','#','#',' ',' ','#',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ','#',' ','#',' ',' ','#',' ',' ',' ',' '],
  [' ',' ',' ','#','#','#',' ','#',' ',' ','#',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ','S','#','#','#','#',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ','#',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ','#',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ','#',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ','#','#','#','#',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
];

// prettier-ignore
const map_05 = [
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','F',' ','#',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#',' ','#',' ',' ',' ','#',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ','#','#','#','#','#','#','#','#','#',' ','#',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ','#',' ',' ','#',' ',' ',' ',' ','#',' ','#','#',' '],
  [' ',' ',' ',' ',' ',' ',' ','#',' ',' ',' ',' ',' ',' ',' ','#',' ','#',' ',' '],
  [' ',' ','#','#','#','#','#','#','#','#','#','#','#',' ',' ','#',' ','#',' ',' '],
  [' ',' ','#',' ',' ','#',' ',' ',' ',' ',' ',' ','#',' ',' ','#','#','#',' ',' '],
  [' ',' ','#',' ',' ','#',' ',' ',' ',' ',' ',' ','#',' ',' ',' ',' ',' ','#','#'],
  [' ',' ','#','#',' ','#',' ',' ',' ',' ',' ',' ','#',' ',' ',' ',' ',' ','#',' '],
  [' ',' ',' ','#',' ','#',' ',' ',' ',' ',' ',' ','#','#','#',' ',' ',' ','#',' '],
  [' ',' ',' ','#',' ','#','#','#',' ',' ',' ',' ','#',' ','#',' ',' ',' ','#',' '],
  [' ',' ',' ','#',' ','#',' ','#',' ',' ',' ',' ','#',' ','#',' ','#','#','#',' '],
  ['#','#','#','#',' ','#',' ','#',' ','#','#','#','#',' ','#',' ','#',' ',' ',' '],
  [' ',' ',' ','#',' ','#',' ','#',' ',' ',' ',' ','#',' ','#',' ','#',' ',' ',' '],
  [' ',' ',' ','#',' ','#',' ',' ',' ',' ',' ',' ','#',' ',' ',' ','#',' ',' ',' '],
  [' ',' ',' ','#',' ','#',' ',' ',' ',' ',' ',' ','#','#','#','#','#','#','#',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','S',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
];

// prettier-ignore
const map_06 = [
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#',' ',' ','#',' ',' ','S'],
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#',' ',' ','#',' ',' ','#'],
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#',' ',' ','#',' ',' ','#'],
  [' ',' ',' ',' ',' ',' ',' ',' ',' ','#','#','#','#','#','#','#','#','#','#','#'],
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#',' ',' ','#',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#',' ',' ','#',' ',' ',' ',' ',' '],
  [' ',' ',' ','#',' ','#',' ',' ','#','#','#','#',' ',' ','#',' ',' ',' ',' ',' '],
  [' ',' ',' ','#',' ','#',' ',' ','#',' ',' ','#',' ',' ','#',' ',' ',' ',' ',' '],
  [' ','#','#','#',' ','#',' ',' ','#',' ',' ','#','#','#','#',' ',' ',' ',' ',' '],
  [' ',' ',' ','#',' ','#',' ',' ','#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ','#',' ','#',' ',' ','#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ','#','#','#','#',' ','#','#','#','#','#','#','#','#','#','#','#',' '],
  [' ',' ',' ','#',' ',' ','#',' ',' ',' ','#',' ',' ',' ','#',' ',' ',' ','#',' '],
  [' ',' ',' ','#',' ',' ','#',' ',' ',' ','#',' ',' ',' ','#',' ','#',' ','#',' '],
  [' ','#','#','#',' ',' ','#',' ',' ',' ','#',' ',' ',' ','#',' ','#',' ','#',' '],
  [' ',' ',' ','#',' ',' ','#',' ',' ',' ','#',' ',' ',' ','#',' ','#',' ','#','#'],
  [' ',' ',' ','#','#','#','#','#','#','#','#','#','#','#','#','#','#',' ','#',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','F',' '],
];

// prettier-ignore
const map_07 = [
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ','#','#','#','#','#','#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#',' ',' '],
  [' ','#',' ','#',' ',' ','#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#',' ',' '],
  [' ','#',' ','#',' ',' ','#',' ',' ',' ',' ','#','#','#','#',' ',' ','#',' ',' '],
  [' ','#',' ','#',' ',' ','#',' ',' ',' ',' ','#',' ',' ','#',' ',' ','#',' ',' '],
  [' ','#',' ','#',' ',' ','#',' ',' ',' ',' ','#',' ',' ','#',' ',' ','#',' ',' '],
  [' ','#',' ','#',' ',' ','#','#','#','#','#','#',' ',' ','#',' ',' ','#',' ',' '],
  [' ',' ',' ','#',' ',' ',' ','#','#','#','#','#',' ',' ','#','#','#','#','#','#'],
  [' ',' ',' ','#',' ',' ',' ','#','#','S','#','#',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ','#',' ',' ',' ','#','#','#','#','#',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#',' '],
  [' ',' ',' ','#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#',' ',' ',' ','#',' '],
  [' ',' ',' ','#','#','#','#','#','#','#',' ',' ','#','#','#',' ',' ',' ','#',' '],
  [' ',' ',' ','#',' ',' ','#',' ',' ','#',' ',' ','#',' ',' ',' ',' ',' ','#','#'],
  ['#','#','#','#',' ',' ','#',' ',' ','#',' ',' ','#',' ',' ',' ','#',' ','#','#'],
  ['#',' ',' ','#',' ',' ','#',' ',' ','#',' ',' ','#','#','#',' ','#',' ','#',' '],
  ['#',' ',' ','#','#','#','#','#','#','#',' ',' ',' ',' ','#',' ','#','#','#',' '],
  ['#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#',' ',' ',' ',' ',' '],
  ['F',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#',' ',' ',' ',' ',' '],
];

// prettier-ignore
const map_08 = [
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','F',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ','#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ','#',' ',' ',' ',' ',' ',' ','#',' ',' ','#',' ',' ','#',' ',' ',' ','#','#','#','#',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ','#','#','#',' ',' ',' ',' ','#',' ',' ','#','#','#','#',' ',' ',' ','#',' ',' ','#',' ',' ',' ',' ','#',' ',' ',' '],
  [' ',' ',' ','#',' ',' ',' ',' ','#',' ',' ','#',' ',' ',' ',' ',' ',' ','#',' ',' ','#',' ',' ',' ',' ','#',' ',' ',' '],
  [' ',' ',' ','#',' ',' ',' ',' ','#',' ',' ','#',' ',' ',' ',' ',' ',' ','#','#','#','#','#','#','#','#','#',' ',' ',' '],
  [' ',' ',' ','#',' ',' ','#','#','#','#','#','#','#',' ',' ','#',' ',' ','#','#',' ',' ',' ',' ',' ',' ','#',' ',' ',' '],
  [' ',' ',' ','#','#','#','#',' ',' ',' ',' ',' ','#',' ',' ','#',' ',' ','#','#',' ',' ',' ',' ',' ',' ','#',' ',' ',' '],
  [' ','#','#','#','#','#','#',' ',' ',' ',' ',' ','#','#',' ','#',' ',' ','#',' ',' ',' ',' ',' ',' ',' ','#',' ',' ',' '],
  [' ','#',' ',' ',' ',' ','#',' ',' ',' ',' ',' ','#',' ',' ','#',' ',' ','#','#',' ',' ',' ',' ',' ',' ','#',' ',' ',' '],
  [' ','#',' ',' ',' ',' ','#',' ',' ',' ',' ',' ','#',' ',' ','#',' ',' ','#','#',' ',' ',' ',' ',' ',' ','#',' ',' ',' '],
  [' ','#',' ',' ',' ',' ','#',' ',' ',' ',' ',' ','#',' ',' ','#',' ',' ','#','#',' ',' ',' ',' ',' ',' ','#',' ',' ',' '],
  [' ','#',' ',' ',' ',' ','#',' ','#','#','#','#','#','#','#','#','#','#','#','#',' ','#','#','#','#','#','#','#',' ',' '],
  [' ','#',' ','#','#','#','#',' ','#','#','#','#','#','#','#','#','#','#','#','#',' ',' ',' ',' ','#',' ',' ','#',' ',' '],
  [' ',' ',' ','#','#','#','#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#','#',' ',' ',' ',' ','#',' ',' ','#',' ',' '],
  [' ',' ',' ',' ',' ',' ','#',' ',' ','#',' ',' ',' ',' ',' ',' ',' ',' ','#','#',' ',' ',' ',' ','#','#',' ','#',' ',' '],
  [' ',' ',' ',' ',' ',' ','#',' ',' ','#',' ',' ',' ',' ',' ',' ',' ',' ','#','#',' ',' ',' ',' ','#','#',' ','#',' ',' '],
  [' ',' ',' ',' ',' ',' ','#','#','#','#','#','#','#','#','#','#',' ',' ','#','#',' ',' ',' ',' ','#','#',' ','#',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ','#',' ',' ',' ',' ','#',' ',' ','#',' ',' ','#','#',' ',' ',' ','#','#','#','#','#',' ',' '],
  [' ',' ','#','#','#','#','#','#',' ',' ',' ',' ','#',' ',' ','#',' ',' ','#','#',' ',' ',' ','#','#',' ',' ',' ',' ',' '],
  [' ',' ',' ','#',' ','#',' ','#',' ',' ','#','#','#',' ',' ','#',' ',' ','#','#','#','#','#','#','#',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ','#',' ','#',' ',' ',' ',' ',' ',' ',' ','#',' ',' ','#','#','#','#','#','#','#',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ','#',' ','#',' ',' ',' ',' ',' ',' ',' ','#',' ',' ',' ','#',' ',' ',' ','#','#',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ','#',' ',' ',' ',' ',' ',' ',' ','#',' ',' ',' ','#',' ',' ',' ','#','#','#','#','#','#','#'],
  ['#','#',' ',' ',' ',' ',' ','#',' ',' ',' ',' ',' ',' ',' ','#','#','#','#','#','#',' ',' ','#','#','#','#','#','#','#'],
  [' ','#',' ',' ',' ',' ',' ','#','#','#','#','#','#','#',' ',' ',' ',' ',' ',' ','#','#',' ',' ',' ','#',' ',' ',' ','#'],
  [' ','#','#','#','#','#','#','#',' ',' ',' ',' ',' ','#',' ',' ',' ','#',' ',' ',' ','#','#',' ',' ','#',' ',' ',' ','#'],
  [' ',' ',' ','#',' ','#',' ','#',' ',' ',' ',' ',' ','#','#','#','#','#',' ',' ',' ',' ','#','#','#','#','#','#',' ','#'],
  [' ',' ',' ','#',' ','#',' ','#','#','#','#','#','#','#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#'],
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','S'],
];

export interface ILevel {
  width: number;
  height: number;
  map: string[][];
}

const mapGenerator = new MapGenerator(20, 20);

export const Levels: ILevel[] = [
  {
    width: 15,
    height: 15,
    map: map_01,
  },
  {
    width: 15,
    height: 15,
    map: map_02,
  },
  {
    width: 15,
    height: 15,
    map: map_03,
  },
  {
    width: 15,
    height: 15,
    map: map_04,
  },
  {
    width: 20,
    height: 20,
    map: map_05,
  },
  {
    width: 20,
    height: 20,
    map: map_06,
  },
  {
    width: 20,
    height: 20,
    map: map_07,
  },
  {
    width: 30,
    height: 30,
    map: map_08,
  },
  {
    width: 20,
    height: 20,
    map: mapGenerator.generateMap(),
  },
];

export const trainingLevel: ILevel = {
  width: 10,
  height: 10,
  map: training_level,
};
