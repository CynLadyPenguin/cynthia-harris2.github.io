// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require(/* Replace this with the name of your lodown! */);

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./cynthia-harris2.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    let numOfMales = _.filter(function(object){
        return object.gender === "male";
    });
    return numOfMales.length;
};

var femaleCount = function(array){
    let numOfFemales = _.reduce(function(acc, current){
        if(current.gender === "female"){
            acc += 1;
        }
        return acc;
    }, 0);
    return numOfFemales;
};

var oldestCustomer = function(array){
     //initialize var to hold highest age
    let highestAge = 0;
    //create return var and use .reduce on our array
    let oldest = _.reduce(function(acc, curr){
        //if our current age is greater than the highest age (starts at 0, but is reassigned a new age after each iteration)
            if(curr.age > highestAge){
                //set the highest age equal to the current age
                highestAge = curr.age;
                //set the accumulator to equal that current age's name property value 
                acc = curr.age;
            }
            //return the accumulator
        return acc;
        //.reduce should have a string value as its seed since we want to return a string of someone's name
    }, "");
    //return our oldest var since its value is the string 
    return oldest;
};

var youngestCustomer = function(array){
    //create var to return our string of youngest customer's name
    //let's try reduce again for this one since .reduce is so versatile
    let youngest = _.reduce(function(acc, current){
      //if our customers age is lower than the acc age
      if(current.age < acc.age){
        //set the acc to the customer's name
        acc = current.name;
      }
      return acc;
    }, "");
    return youngest;
};

var averageBalance;

var firstLetterCount;

var friendFirstLetterCount;

var friendsCount;

var topThreeTags;

var genderCount;

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
