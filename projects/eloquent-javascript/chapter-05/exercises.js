// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function flatten(array) {
  //loop over the array
  for(let i = 0; i < array.length; i++){
    //check if the current element is an array
    if(array[i] instanceof Array){
      //concat the arrays together
      array.splice.apply(array,[i,1].concat(array[i]));
    }
  }
  return array;
}

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function loop(value, test, update, body) {
  //loop starting at value
  //pass i into the test function checking if it passes
  //set i equal to value returned from passing i into update function
  for (let i = value; test(i); i = update(i)) {
    //body(i)
    body(i);
  }
}

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function every(array, test) {
  //for in loop creating element variable to access element in array
  for (let element of array) {
    //pass the element(s) into the test function to check if it returns false
    //if it returns false, return false
    if (test(element) === false) {
      return false;
    }
  }
  //otherwise return true
  return true;
}

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function dominantDirection(string){
  //create output variables for right to left(rtl) and left to right(ltr)
  let ltr = [];
  let rtl = [];
  //loop over the string
  for(let i = 0; i < string.length; i++){
    //create variable to hold the recursive callback of the string
    let scriptName = characterScript(string.charCodeAt(i)); 
      //if the variable's value isn't null, set it's direction to ltr
    if(scriptName !== null){
      if(scriptName.direction === "ltr"){
        //then push in the value
        ltr.push(scriptName);
      } else {
        rtl.push(scriptName);
      }
    }
  }
    //check which output variable has the longest length(proving it is the dominant direction)
  if(ltr.length > rtl.length){
    return "ltr";
  } else {
    return "rtl";
  }
}

// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
