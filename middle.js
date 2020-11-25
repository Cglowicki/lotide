const eqArrays = function(arr1, arr2) {
  
  if (arr1.length !== arr2.length) {
    return false;
  }
  
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  
  return true;
    
};

const assertArraysEqual = function(arr1, arr2) {

  if (!eqArrays(arr1, arr2)) {
    console.log('🧨🧨🧨 Assertion Failed: arr1 !== arr2');

  } else {
    console.log('💎💎💎 Assertion Passed: arr1 === arr2');
  }
};

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

