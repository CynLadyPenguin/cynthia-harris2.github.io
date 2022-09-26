/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

// const { some } = require("lodash");

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//create a variable named animal that is {} empty obj
var animal = {};
//create key called species that has a string value
animal.species = "elephant";
//create key called name that has a string value
animal["name"] = "Polka";
//create a key called noises that is [] empty array
animal.noises = [];
console.log(animal);

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//create noises var that is []
var noises = [];
//add 4 elements to noises using various methods
noises[0] = "stomp";
noises.push("trumpet");
noises.unshift("roar");
noises[noises.length] = "chew";
//check noises length 
console.log(noises.length);
//log the last value in noises
console.log(noises.length - 1);
console.log(noises);

//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

//add above noises variable as the key in the animal obj
animal["noises"] = noises;
//add another element to the noises array
noises.push("gulp");
console.log(animal);

/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////

//create new var animals that is []
var animals = [];
//push value of animal(which is obj) into the new animals array
animals.push(animal);
console.log(animals);
//create 3 new animals with species, name, and noises 
var duck = {species: "duck", name: "Jerome", noises: ["quack", "honk", "sneeze", "woosh"]};
var tiger = {species: "tiger", name: "Lester", noises: ["roar", "purr", "scratch", "jump"]};
var bird = {species: "bird", name: "Chloe", noises: ["tweet", "singing", "flap", "shuffle"]};
//push all three animals into the animals array
animals.push(duck, tiger, bird);
console.log(animals);
console.log(animals.length);

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//create friends var that is []
var friends = [];
//create function getRandom that takes in an array (can be the animals array)
function getRandom(array){
  //using Math.random, return a random INDEX from the length of the array
  //I used Math.floor to make sure it doesn't go below 0.
  return Math.floor(Math.random() * array.length);
}
//push that random animal name into friends
//animals(accesses the array), getRandom(animals)(accesses the random index), .name(accesses that random animal's name)
friends.push(animals[getRandom(animals)].name);
console.log(friends);
//add friends array to a random friend that you choose
animals[0]["friends"] = friends;
console.log(animals);

/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}