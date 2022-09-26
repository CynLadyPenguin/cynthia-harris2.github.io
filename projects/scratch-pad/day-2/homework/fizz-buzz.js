// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
    //create loop that loops over nums 1-100
    for(let i = 1; i < 101; i++){
        //if the current num when divided by 15 = 0
        if(i % 15 === 0){
            //log fizzbuzz
            console.log("FizzBuzz");
            //if num when divided by just 5 is 0
        } else if(i % 5 === 0){
            //log buzz
            console.log("Buzz");
            //if num when divided by just 3 is 0
        } else if(i % 3 === 0){
            //log fizz
            console.log("Fizz");
        } else {
            //otherwise log the num
            console.log(i);
        }
    }

    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}