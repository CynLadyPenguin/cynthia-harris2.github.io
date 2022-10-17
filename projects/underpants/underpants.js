// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below its instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/
    _.identity = function(value){
        //return the value just as is
        return value;
    }

/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/
_.typeOf = function(value){
    //if value is array return array string
    if(Array.isArray(value)){
        return "array";
        //if value is null return null string
    } else if(value === null){
        return "null";
        //if value is undefined return undefined string
    } else if(value === undefined){
        return "undefined";
    } else {
        //if none of above return the typeof value
        return typeof value;
    }
}

/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/
_.first = function(array, number){
    //if it's not an array then return []
    if(!Array.isArray(array)){
        return [];
    }
    //if no num then return first element of array
    if(!number){
        return array[0];
    }
    //if neg num return []
    if(number < 0){
        return [];
    }
    //return whole array if num is greater than array length
    if(number > array.length){
        return array;
    }
    //slice nothing off the array and return the num = to elements from front of array
    return array.slice(0, number);
}

/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/
_.last = function(array, number){
    //if array is not an array then return an empty array
    if(!Array.isArray(array)){
        return [];
    }
    //if there's no num then return the last element of the array
    if(!number){
        return array[array.length - 1];
    }
    //if negative num then return []
    if(number < 0){
        return [];
    }
    //if the num is greater than length of array return the whole array
    if(number > array.length){
        return array;
    }
    //slice a neg num to return that num of elements from back of array
    return array.slice(-number);
}

/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/
_.indexOf = function(array, value){
    //if the array does not include value return -1
    if(!array.includes(value)){
        return -1;
    } 
    //return the index of value in array
    return array.indexOf(value);
}

/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/
_.contains = function(array, value){
    //return true if value is in array
    if(array.includes(value)){
        return true;
    }
    return false;
}
//alternative 

_.contains = function(array, value){
    //loop over the array
    for(let i = 0; i < array.length; i++){
        //if the current element in the array is the value, return true
        if(array[i] === value){
            return true;
        }
    }
    //else return false
    return false;
}


/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/
_.each = function(collection, func){
    //if collection is array, call func on element, index, collection
    if(Array.isArray(collection)){
        //loop over array
        for(let i = 0; i < collection.length; i++){
        //pass element, index, coll into func
        func(collection[i], i, collection);
        }
    } else{ //collection is an obj
        //loop over obj
        for(var key in collection){
            //pass value, key, collection through func
            func(collection[key], key, collection);
        }
    }
}

/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/
_.unique = function(array){
    //return new set array
    return [...new Set(array)];
}

/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/
_.filter = function(array, func){
    //create output array
    let output = [];
    //loop over array
    for(let i = 0; i < array.length; i++){
        //if called func on element, index, array returns true
        if(func(array[i], i, array)){
            //push element into output
            output.push(array[i]);
        }
        
    }
    return output;
}

/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter()
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/
_.reject = function(array, func){
    //create output var
    let output = [];
    //loop over array
    for(let i = 0; i < array.length; i++){
        //if func proves false
        if(func(array[i], i, array) === false){
            output.push(array[i]);
        }
    }
    return output;
}

/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/
_.partition = function(array, func){
    //create truthy, falsey, and array to hold truthy/falsey
    let truthy = [];
    let falsey = [];
    let both = [];
    //loop over array
    for(let i = 0; i < array.length; i++){
        //if values prove true
        if(func(array[i], i, array)){
            //push elements into truthy
            truthy.push(array[i]);
        } else { //values prove false
            falsey.push(array[i]);
        }
    }
    //return the concatenated arrays into one array
    return both.concat([truthy, falsey]);
}

/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/
_.map = function(collection, func){
    //create output var
    let output = [];
    //if colle is array
    if(Array.isArray(collection)){
        //loop over array
        for(let i = 0; i < collection.length; i++){
            //run values through func while pushing them into output
            output.push((func(collection[i], i, collection)));
        }
    } else { //collection is an obj
        //loop over obj
        for(let key in collection){
            //push values passed through func into output
            output.push((func(collection[key], key, collection)));   
        }
    }
    return output;
}

/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/
_.pluck = function(array, prop){
    //return mapped array of obj looking for the prop
    return array.map(x => x[prop]);
}

/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/
_.every = function(collection, func){
//if no func 
if(!func){
    //check if it's an array
    if(Array.isArray(collection)){
        //loop over collection
        for(var i = 0; i < collection.length; i++){
            //if no truthy values return false
            if(!collection[i]){
                return false;
            }
        }
    } else { //it's an obj
        //loop over object
            for(var key in collection){
                //if no values are truthy return false
                if(!collection[key]){
                    return false;
                }
            }
    }
   } else {//else if there is a func
    //if it's an array
    if(Array.isArray(collection)){
        //loop over it
        for(let i = 0; i < collection.length; i++){
            //call func on it
            if(func(collection[i], i, collection) === false){
                return false;
            }

        }
        
    } else { //it's an obj
        //loop over obj
        for(let key in collection){
            //call func on it
            if(func(collection[key], key, collection) === false){
                return false;
            }
        }
    }
}   
   return true;
}

/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/
_.some = function(collection, func){
    //if no func 
    if(!func){
        //check if it's an array
        if(Array.isArray(collection)){
            //loop over collection
            for(var i = 0; i < collection.length; i++){
                //if no truthy values return false
                if(collection[i]){
                    return true;
                }
            }
        } else { //it's an obj
            //loop over object
                for(var key in collection){
                    //if no values are truthy return false
                    if(collection[key]){
                        return true;
                    }
                }
        }
       } else {//else if there is a func
        //if it's an array
        if(Array.isArray(collection)){
            //loop over it
            for(let i = 0; i < collection.length; i++){
                //call func on it
                if(func(collection[i], i, collection)){
                    return true;
                }
    
            }
            
        } else { //it's an obj
            //loop over obj
            for(let key in collection){
                //call func on it
                if(func(collection[key], key, collection)){
                    return true;
                }
            }
        }
    }   
       return false;
    }
    

/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/
_.reduce = function(array, func, seed){
    //create var to hold result
    let result;
//if there's a seed
if(seed !== undefined){
    //set result equal to see
    result = seed;
    //loop over array
    for(let i = 0; i < array.length; i++){
        //pass elements & stuff through func include result as first value
        //set that value equal to result
        result = func(result, array[i], i, array);

    }
} else { //there's no seed
    result = array[0];
    //loop over array
    for(let i = 1; i < array.length; i++){
        //set result equal to func with values
        result = func(result, array[i], i, array);
    }
}
return result;
}

/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/
_.extend = function(...obj){
    //use obj.assign to push other obj values(from any obj or # of objs) into the iterable obj
    return Object.assign(...obj, {});
}
//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
