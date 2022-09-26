// #!/usr/bin/env node

'use strict';

/**
 * 3: range()
 *
 *  a. Create a function called range that takes two integers as 
 *  parameters and returns an Array containing all integers 
 *  between the two parameters, inclusively.  For example:
 *
 *      range(8, 14);  // => [8, 9, 10, 11, 12, 13, 14]
 *
 *  If the first argument is greater than the second, 
 *  return the range in reverse order, ie:
 *
 *      range(14, 8);  // => [14, 13, 12, 11, 10, 9, 8]
 *
 *  TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best?
 *  c. you'll wanna make use of the push() method of Array.
 */
function range(start, end) {
    // YOUR CODE GOES BELOW HERE //
    //create variable to hold the output in an array
    let emptyArray = [];
    //if the ending # is larger than the starting
    if(end > start){
        //loop forward from start to end. This loop stops when the element is less than the ending #
        for(let i = start; i <= end; i++){
            //push each element from loop into array var
            emptyArray.push(i);
        }
        //if start is greater than ending num
    } else if(end < start){
        //loop backwards from start to end. Loop always starts at start #. This loop ends when the element is greater than/equal to the ending num
        for(let j = start; j >= end; j--){
            //push elements into array var
            emptyArray.push(j);
        }
    }
    //return our output variable with the elements pushed inside
    return emptyArray;
    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.range = range;
}
