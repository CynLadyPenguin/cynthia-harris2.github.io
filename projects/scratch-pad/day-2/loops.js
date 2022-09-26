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
 //loop over the array forward to back
  for(let i = 0; i < array.length; i++){
    //log the elements of the array
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
 //loop over the array back to front
  for(let i = array.length - 1; i >= 0; i--){
    //log the elements of the array in reverse
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
 //using Ob.keys, return the property names in the obj
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
 //use for in loop to loop over the obj
  for(let keys in object){
    //log the property's names/keys
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
 //using obj.values return the key's values of the obj
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
 //use for in loop to loop over obj
  for(let keys in object){
    //log the obj key values
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
 //use obj.keys to print the obj property names and .length(obj.keys output is an array) to log the number of keys the obj has
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
 //create empty array var to hold output
  let emptyArray = [];
  //loop over obj
  for(let keys in object){
    //push the key values into the empty array var
    emptyArray.push(object[keys]);
  }  
  //take array variable with new elements inside and loop over it back to front
  for(let i = emptyArray.length - 1; i >= 0; i--){
    //log the elements of the array
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
