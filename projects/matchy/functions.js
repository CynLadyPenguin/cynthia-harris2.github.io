/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//function search takes array and string as parameters
function search(array, string){
    //create a var to hold the output string
    var name;
    //loop over the array from beginning 0 to end array.length
    for(let i = 0; i < array.length; i++){
        //the that array element's name property matches the string
        if(array[i].name.charAt(0).toUpperCase() === string.charAt(0).toUpperCase()){
            //assign name to the current element
          name = array[i];
          //return name
          return name;
        } else { //else the name doesn't match so set name to be null
            name = null;
        }
    }
    //before function close, return the name (which will be that array element that matches or null)
    return name;
}
search(animals, "Jerome");

//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//function replace takes in animals array, a name, and the replacement as parameters
function replace(animals, name, replacement){
    //loop over the animals array
    for(let i = 0; i < animals.length; i++){
        //if the current element's name property matches the input name
        if(animals[i].name === name){
            //assign the current element to the replacement
            animals[i] = replacement;
        } 
    }
}

//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//function remove takes in the animals array and a name
function remove(animals, name){
    //loop over the animals array
    for(let i = 0; i < animals.length; i++){
        //if the current element's name matches the input name
        if(animals[i].name === name){
            //assign that element to an empty array
            animals[i] = [];
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//function add takes in the animals array and a animal obj
function add(animals, animal){
    //check if animal name matches any animal's name in the animals array
    var matching = animals.find((specific) => specific.name === animal.name);
    //if the animal's name and species has any length and the above variable (matching) is false/undefined
        if((!matching) && (animal.name.length > 0) && (animal.species.length > 0)){
            //push the new animal obj into the animals array
           animals.push(animal);
        }
}

/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
