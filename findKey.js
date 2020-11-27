const assertEqual = function(actual, expected) {
  
  if (actual === expected) {
    console.log(`💎💎💎 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🧨🧨🧨 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function (object, callback) {

  let keys = Object.keys(object); //array of keys
  
  //console.log(keys) //checks out

  for (let key of keys){ //loop through keys
  
    if (callback(object[key])) { 
       return key;
    }
  }
}

findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)

assertEqual(findKey({"Blue Hill": { stars: 1 }}, x => x.stars === 2), "Blue Hill");
assertEqual(findKey({"noma": { stars: 2 }}, x => x.stars === 2), "noma");