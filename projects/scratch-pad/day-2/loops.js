// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  /*
  I: input is an array
  O: output is the array elements 
  C:
  E:
  */
  for(let i = 0; i < array.length; i++){
    console.log(array[i]);
  } 
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  /*
  I: input is an array
  O: output is the array elements printed in reverse
  C:
  E:
  */
  for(let i = array.length - 1; i >= 0; i--){
    console.log(array[i]);
  } 
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  /*
  I: input is an object
  O: output is an array of the object's keys
  C:
  E:
  */
  return Object.keys(object);
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  /*
  I: input is an object
  O: output is the object's keys 
  C:
  E:
  */
  for(let keys in object){
    console.log(keys);
  }
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  /*
  I: input is an object
  O: output is an array of the object's values 
  C:
  E:
  */
  return Object.values(object); 
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  /*
  I: input is an object
  O: output is the object's values 
  C:
  E:
  */
  for(let keys in object){
    console.log(object[keys]);
  } 
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  /*
  I: input is an object
  O: output is a number representing the number of key/values in the input object
  C:
  E:
  */
  return Object.keys(object).length;
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  /*
  I: input is an object
  O: output is an array with the object's values printed in reverse
  C:
  E:
  */
  let emptyArray = [];
  for(let keys in object){
    emptyArray.push(object[keys]);
  }  
  for(let i = emptyArray.length - 1; i >= 0; i--){
    console.log(emptyArray[i]);
  }
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
