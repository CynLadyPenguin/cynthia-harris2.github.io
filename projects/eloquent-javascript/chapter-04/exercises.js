////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
function range(start, end, step = 1) {
  //create an output variable
  let array = [];
  //if start and end are equal, there's no numbers between them
if(start === end){
  return [];
}
//if the default variable is greater than 0
  if (step > 0) {
    //start less than end num
    for (var i = start; i <= end; i += step){
      array.push(i);
    }
    //start greater than end
  } else {
    for (var i = start; i >= end; i += step){
      array.push(i);
    }
  }
  //return the default array
  return array;
}


////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(array) {
  if(array.length === 0){
    return 0;
  }
  return array[0] + sum(array.slice(1));
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(array) {
  //create output variable
  let output = [];
  //loop over the array backwards
  for(let i = array.length - 1; i >= 0; i--){
    //push values into array
    output.push(array[i]);
  }
  //return output array
  return output;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(array) {
  //iterate over half the original array
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    //create variable old to hold the iterated half of the array
    let old = array[i];
    //set i to it's counterpart/opposite on the other end of the array
    array[i] = array[array.length - 1 - i];
    //set the counterpart/opposite equal to the iterated half of the array(the old value)
    array[array.length - 1 - i] = old;
 }
 return array;
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(array) {
  let rest = null;

  for(let i = array.length - 1; i >= 0; i--){
    //array[i] = a number(starts at 3(end of array))
    rest = {value: array[i], rest: rest}
  }
  return rest;
}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(list, array = []) {
  //base case 
  if(list.rest === null){
    array.push(list.value);
    return array;
  }
  array.push(list.value);
  return listToArray(list.rest, array);
  //recursive case
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend(element, list) {
  //return an obj with keys of value and rest
  //value's value is the element(param) and rest's value is the list(param)
  return {value: element, rest: list};
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth(list, n) {
  //if there's no list then return undefined
  if (!list) {
    return undefined;
    //if input n is 0 return list.value
  }else if (n == 0){
    return list.value;
  }else {
    //else call the nth function on list.rest and take 1 off n
    return nth(list.rest, n - 1);
}
}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual(x, y) {
//determine if x AND y are not objects
if(typeof x !== "object" && typeof y !== "object"){
  return x === y;
}
//determine if x OR y are not objects
if(typeof x !== "object" || typeof y !== "object"){
  return false;
}
//create arrays of each object's keys
let xKeys = Object.keys(x);
let yKeys = Object.keys(y);
//check if the lengths are different
if(xKeys.length !== yKeys.length){
  return false;
}
//iterate through the keysArray to see if keys match
for(let i = 0; i < xKeys.length; i++){
  if(!yKeys.includes(xKeys[i]) || !deepEqual(x[xKeys[i]], y[xKeys[i]])){
      return false;
  }
}
return true;
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
