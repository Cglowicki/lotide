const assertEqual = function(actual, expected) {
  
  if (actual === expected) {
    console.log(`💎💎💎 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🧨🧨🧨 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

const eqObjects = function(object1, object2) {
  
  let objK1 = Object.keys(object1);
  let objK2 = Object.keys(object2);

  if (objK1.length !== objK2.length) {
    return false;
  } else {
    
    let keys = objK1;

    for (let key of keys) {
      
      let a = object1[key];
      let b = object2[key];

      if (Array.isArray(a) && Array.isArray(b)) {
        return eqArrays(a, b);
      }
      
      if (object1[key] !== object2[key]) {
      return false;
      }
    }
    return true;
  }
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false