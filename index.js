const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');
const assertObjectsEqual = require('./assertObjectsEqual');
const countLetters = require('./countLetters');
const countOnly = require('./countOnly');
const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const letterPositions = require('./letterPositions');
const map = require('./map');
const takeUntil = require('./takeUntil');
const without = require('./without');
const assertArraysEqualTest = require('./test/assertArraysEqualTest');
const assertEqualTest = require('./test/assertEqualTest');
const eqArraysTest = require('./test/eqArraysTest');
const headTest = require('./test/headTest');
const middleTest = require('./test/middleTest');
const tailTest = require('./test/tailTest');

module.exports = {
  head,
  tail,
  middle,
  assertArraysEqual,
  assertEqual,
  assertObjectsEqual,
  countLetters,
  countOnly,
  eqArrays,
  eqObjects,
  findKey,
  findKeyByValue,
  letterPositions,
  map,
  takeUntil,
  without,
  assertArraysEqualTest,
  assertEqualTest,
  eqArraysTest,
  headTest,
  middleTest,
  tailTest
};
