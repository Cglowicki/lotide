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


const letterPositions = function(string) {

  const results = {};

  for (let i = 0; i < string.length; i++) {
    
    let newArr = [];

    if (!results.hasOwnProperty(string[i])) {
      newArr.push(i);
      results[string[i]] = newArr;
    } else {
      results[string[i]].push(i);
    }
  }
  console.log(results);
  return results;
};

letterPositions('hello');
assertArraysEqual(letterPositions("hello").e, [1]);


       
        
  





