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

const without = function (source, itemsToRemove) {

  let newArr = source;
  //equals 'words'
  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      //loops thourgh source & items
      if (source[i] === itemsToRemove[j]) {
        newArr.splice(i, 1);
        //splice itemsToRemove from newArr
      }
    }
  }
  return newArr;
}
console.log(without([1, 2, 3, 4], [3, 4]));

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);