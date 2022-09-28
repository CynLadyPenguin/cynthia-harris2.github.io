//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

const { keys, split } = require("lodash");

function objectValues(object) {
    //return Object.values with input object
    //Ob.v will return the key values in an array
    return Object.values(object);
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    //create var to hold output as array
    let newArr = [];
  //create var to hold output as string
  let newStr = "";
  //loop over obj
  for(var key in object){
    //push keys into newArr
    newArr.push(key);
  } //close loop
  //set newStr equal to the array with the keys "joined" with a space
  newStr = newArr.join(" ");
  //return newStr
  return newStr;
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    //create var empty array
    let emptyArr = [];
    //create var empty str
    let emptyStr = "";  
    //loop over obj
    for(var key in object){
        //if typeof value is a string
        if(typeof object[key] === "string"){
    //push values into array
    emptyArr.push(object[key]);
    }
}
    //set empty str equal to array with values joined with a space
    emptyStr = emptyArr.join(" ");
    //return str var
    return emptyStr;
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    //if the collection is an array we use Array.isArray to check
    if(Array.isArray(collection)){
        return "array";
        //else use typeof to check if it's an obj
    } else if(typeof collection === "object"){
        return "object";
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    //use the charAt, uppercase, and slice methods to capitalize the first index character of a single string
    return string.charAt(0).toUpperCase() + string.slice(1);
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    //create var to hold split string in array. String should be split into individual elements
    let splitStr = string.split(" ");
    //loop over the splitStr
    for(var i = 0; i < splitStr.length; i++){
        //set each element to have its 0 index capitalized
        splitStr[i] = splitStr[i][0].toUpperCase() + splitStr[i].slice(1);
    }
    // return the splitStr joined
    return splitStr.join(" ");
    
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    //capitalize the first letter of name
    var capName = object.name.charAt(0).toUpperCase() + object.name.slice(1);
    //return the capName var with a welcome message
    return `Welcome ${capName}!`;
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    //capitalize obj name and capitalize obj species
    //return them in backticks
    return `${object["name"][0].toUpperCase() + object.name.slice(1)} is a ${object.species[0].toUpperCase() + object.species.slice(1)}`;
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    //if noises exists
    if(object.noises){
        //if noises is array
        if(Array.isArray(object.noises)){
            //if noises array has elements
            if(object.noises.length > 0){
                //join those elements in a string
                return object.noises.join(" ");
            }
               
        } 
    }
    return "there are no noises";  
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    //if the string INCLUDES word return true
        if(string.includes(word)){
            return true;
        }
        return false;
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    //push name into friend's array (create array if it doesn't exist)
    object["friends"].push(name);
    //return obj
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    //determine if obj has friend's array
    if(object.friends){
        //if array exists
        if(Array.isArray(object.friends)){
            //loop over the array
            for(var i = 0; i < object.friends.length; i++){
                //if current element is name, return true
                if(object.friends[i] === name){
                    return true;
                }
            }
        }
    }
    return false;
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {

}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
   
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    //trying something new here 
    //[these brackets will set the new array inside an array]
    //using spread operator, create a "new Set" of array data. The spread op iterates 
    //"Set" will remove the duplicates from the original array
    return [...new Set(array)];
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}