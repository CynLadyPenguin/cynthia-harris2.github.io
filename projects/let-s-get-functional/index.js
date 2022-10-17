// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require("underbar");

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
    //let's use filter  //.filter function takes in an obj
    let numOfMales = _.filter(array, function(customer){
        //if the obj.gender is male 
        return customer.gender === "male";
    });
    //return the var length
    return numOfMales.length;
};

var femaleCount = function(array){
    //gonna use reduce so we can accumulate a num
    let numOfFemales = _.reduce(array, function(acc, current){
        //if the current gender is female
        if(current.gender === "female"){
            //add 1 to the acc
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
    let oldest = _.reduce(array, function(acc, curr){
        //if our current age is greater than the highest age (starts at 0, but is reassigned a new age after each iteration)
            if(curr.age > highestAge){
                //set the accumulator to equal that current age's name property value 
                acc = curr.name;
                //set the highest age equal to the current age
                highestAge = curr.age;
  
            }
            //return the accumulator
        return acc;
        //no seed here because we want the reduce method to start at array[0]
    },"");
    //return our oldest var since its value is the string 
    return oldest;
};

var youngestCustomer = function(array){
    //let's try reduce again for this one since .reduce is so versatile
    let youngest = _.reduce(array, function(acc, current){
      //if our customers age is lower than the acc age
      if(current.age < acc.age){
        //set the acc to the customer's name
        acc = current;
      }
      return acc;
      //we won't input a seed here because we want the first result to be array[o].age
    });
    return youngest.name;
};

var averageBalance = function(array){
    //let's use reduce to add the balances
    let average = _.reduce(array, function(acc, current){
        //we need to convert the balances from strings with dollar signs to a number
       acc += Number(current.balance.replace(/\$|,/g, ""));
    
    return acc;
}, 0);
    return average/array.length;
};

var firstLetterCount = function(array, letter){
    //we will use reduce to loop over the array and accumulate the number of letters
    let firstLetter = _.reduce(array, function(acc, current){
        //if the current name first index begins with the letter 
        //uppercase both
        if(current.name[0].toUpperCase() === letter.toUpperCase()){
            //add 1 to the acc
            acc += 1;
        }
        return acc;
        //input a seed of 0 
    }, 0);
    return firstLetter;
};

var friendFirstLetterCount = function(array, customer, letter){
    //let's use .reduce because we love it so much
    let firstLetterFriends = _.reduce(array, function(acc, current){
        //check if the current customer has a friend's array
        if(current.name === customer){
            //iterate over the friend's array
            for(let i = 0; i < current.friends.length; i++){
                //check if friend's name starts with the letter uppercase
                if(current.friends[i].name[0].toUpperCase() === letter.toUpperCase()){
                    //add 1 to acc
                    acc += 1;
                }
            }
        }
        return acc;
    }, 0);
    return firstLetterFriends;
};

var friendsCount = function(array, name){
    //use reduce to accumulate the names into an array
    let friend = _.reduce(array, function(acc, customer){
            //iterate over friend's array
            for(let j = 0; j < customer.friends.length; j++){
                //if the name is in the friend's array
                if(customer.friends[j].name === name){
                    acc.push(customer.name);
                }
            }
        return acc;
    }, [])
    return friend;
};

var topThreeTags = function(array){
    let top = array.reduce(function(acc, current){
      for(let i = 0; i < current.tags.length; i++){
        if(acc[current.tags[i]]){
          acc[current.tags[i]] += 1;
        }else {
          acc[current.tags[i]] = 1;
        }
      }
      return acc;
    }, {});
    var sorted = Object.fromEntries(
        Object.entries(top).sort(([,a],[,b]) => b-a));
    var top3 = Object.keys(sorted).slice(0, 3);
    return top3;
  }
  
  
var genderCount = function(array){
    //assign a var and use reduce to accumulate the genders
    let gender = _.reduce(array, function(acc, customer){
        //if 
        if(acc[customer.gender]){
            acc[customer.gender] += 1;
        } else {
            acc[customer.gender] = 1;
        }
        return acc;
    }, {});
    return gender;
};

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
