const assertEqual = function(actual, expected) {
  
  if (actual === expected) {
    console.log(`💎💎💎 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🧨🧨🧨 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const countLetters = function(string) {

  const letterCount = {};

  for (const letter of string) {
  
    if (letterCount[letter]) {
      letterCount[letter] += 1;
         
    } else {
      letterCount[letter] = 1;
    }
    
  }
  return letterCount;
};

const result = countLetters("Hello my name is Cam");
console.log(result);
assertEqual(result['m'], 3);
assertEqual(result['m'], 2);

