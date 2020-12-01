const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual')


const middle = function(inputArray) {
  
  if (inputArray.length < 2) {
    return [];
  }
  
  arr = [];
  middleInd = 0

  if (inputArray.length % 2 === 0){

    let middleRight = inputArray[Math.round((inputArray.length - 1) / 2)];
    let middleLeft = inputArray[Math.round((inputArray.length - 1) / 2) - 1];
    arr.push(middleLeft, middleRight);

  } else {
    middleInd = inputArray[Math.round((inputArray.length - 1) / 2)];
    arr.push(middleInd);
  }
  return arr;
}

module.exports = middle;