////////////////////////////////////////////////////////////////////////////////
// min /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function min(x, y) {
  //if the nums are the same then return 0
  if(x === y){
    return 0;
    //if x(first num) is greater then return y(lower value)
  } else if(x > y){
    return y;
  } else {  // else x is lower so return x
    return x;
  }
}

////////////////////////////////////////////////////////////////////////////////
// isEven //////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function isEven(num) {
  //if num is 0 then it's even
  if(num === 0){
    return true;
    //if num is 1 then it's odd
  } else if(num === 1){
    return false;
    //if num is neg then add 2 until you get 0 or 1
  } else if(num < 0){
    return isEven(num + 2);
  } else {
    //if num is pos then subtract 2 until you get 0 or 1
    return isEven(num - 2);
  }
  }


////////////////////////////////////////////////////////////////////////////////
// countChars //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function countChars(string, char) {
  //split the string to create an array of individual elements and use .reduce to "collect" num of char
  let split = string.split("").reduce(function(acc, current){
    //if the current element matches the char, add 1 to the acc
   if(current === char){
    acc += 1;
   }
   return acc;
  }, 0);
  return split;
}

////////////////////////////////////////////////////////////////////////////////
// countBs /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function countBs(string) {
  //create return variable 
  //split string(which creates an array) and use .reduce to "collect" num of 'B'
  let split = string.split("").reduce(function(acc, current){
    //if the string has no elements then return 0
    if(string.length === 0){
      return 0;
      //if the current element is "B" then add 1 to the acc
    } else if(current === "B"){
     acc += 1;
    }
    return acc;
   }, 0);
   return split;
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    min,
    isEven,
    countBs,
    countChars,
  };
};
