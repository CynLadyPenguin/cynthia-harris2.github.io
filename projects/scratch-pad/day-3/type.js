// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
function isArray(value) {
    // YOUR CODE BELOW HERE //
    //use Array.isArray to check if value is an array
    if(Array.isArray(value)){
        //return true if value is an array
        return true;
    }
    //return false if value is not an array
    return false;
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
function isObject(value) {
    // YOUR CODE BELOW HERE //
    //check if value is an array using Array.isArray. return false if it is an array
    if(Array.isArray(value)){
        return false;
        //use instanceof to check if value is a date. return false if it is a date
    } else if(value instanceof Date){
        return false;
        //check if value is null. return false if value's value is null
    } else if(value === null){
        return false;
        //check if value's type is undefined. return false if it is undefined
    } else if(typeof value === undefined){
        return false;
        //check if value's type is an object and return true if it is
    } else if(typeof value === "object"){
        return true;
    } 
    //if value is not any of the above (except an obj) it should return false
    return false;
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //
    //return true this time if value is an array
    if(Array.isArray(value)){
        return true;
        //check if value is date
    } else if(value instanceof Date){
        return false;
        //check if value's value is null
    } else if(value === null){
        return false;
        //check if value's type is undefined
    } else if(typeof value === undefined){
        return false;
        //return true if value is obj
    } else if(typeof value === 'object'){
        return true;
    }
    //any type besides Array and obj should return false
    return false;
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
    //return "array" if value is array
   if(Array.isArray(value)){
    return "array";
    //return "undefined" if value's value is undefined
   } else if(typeof value === undefined){
    return "undefined";
    //return null(in string) if value is null
   } else if(value === null){
    return "null";
    //return "date" if value if date
   } else if(value instanceof Date){
    return "date";
   } else{
    //return the value's type
    return typeof value;
   } 
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
