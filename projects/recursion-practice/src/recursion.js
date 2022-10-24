// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(n) {
  //if n is negative then return null because a - x - is a positive
  if(n < 0){
    return null;
  }
  //base case: if the number is 1 or 0 then just return 1. 0 cannot be factorialed because anything x0 is zero
  if(n === 0 || n === 1){
    return 1;
  }
  //recursive case: factorial is a number multiplied by the number under it. n will change each cycle and become the number below it
  return n * factorial(n - 1);
};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array) {
  //base case: if the array has no more elements in it then return the sum (totaled in output)
  if(array.length === 0){
    return 0;
  }
  //recursive case: set output to equal the first element of the array + output. 
  //Slice off the first element of the array then it becomes the new array[0] and output changes
   return array[0] + sum(array.slice(1));
};

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
};

// 4. Check if a number is even.
var isEven = function(n) {
  //if our num is 0, it's even. if it's 1 then it's odd so return false
  if(n === 0){
    return true;
  } else if(n === 1){
    return false;
  }
  //if n is positive
  if(n > 0){
    //return isEven with n - 2 until it either hits 0 or 1
  return isEven(n - 2);
  //if n is negative
  } else if(n < 0){
    //keep adding 2 to the number until it hits 0 or 1
    return isEven(n + 2);
  }
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  //base case: if n is 0 then return 0
  if(n === 0){
    return 0;
  } 
  //if n is negative
  if(n < 0){
    //subtract the value at sumBelow(-n -1) and then add one to that num
    return n - sumBelow(-n - 1) + 1;
    //if n is positive
  } else if(n > 0){
    //add the value at sumBelow(n -1) and subtract 1 from that num
    return n + sumBelow(n - 1) - 1
  }
};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function(x, y, output = []) {
  //if x and y are equal return an empty array
  if(x === y){
    return output;
  }
  //if x and y are right next to each other numerically return an empty array
  if(x + 1 === y || x - 1 === y){
    return output;
  }
  //if x and y have one number between them return an array of that one number
  if (y - x === 2){
    return [x + 1];
  } else if(x < y) {
    //otherwise create an output variable to hold the current value of x and y - 1
    output = range(x, y - 1);
    //push y - 1 if y is greater
    output.push(y - 1);
  } else { //x is the greater number
    //output variable holds current value of x and y + 1 
    output = range(x, y + 1);
    //push y + 1
    output.push(y + 1);
  }
  return output;
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  //base case if exp reaches 0 return 1
  if(exp === 0){
    return 1; 
  }
  //if exp is 1 base is just itself so return base
  if(exp === 1){
    return base;
  }
  //if exp is positive
  if(exp > 0){
    //multiply the base times the exp -1
    return base * exponent(base, exp - 1);
  }else {//if exp is negative
    //divide the base by the negative exp +1
    return base / exponent(base, -exp + 1);
  }
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
//power of two is a base 2 with n exp. So if 2^n resolves then it is a power of two
var powerOfTwo = function(n) {
  //0 cannot be a power of 2 because 2^0 = 1
  if(n === 0){
    return false;
    //2^0 returns 1 so n = 1 can be our base case for division
    //2 divided by 2 is 1!!
  } else if(n === 1){
    return true;
  }
  //keep dividing n by 2
  return powerOfTwo(n/2);
};

// 9. Write a function that accepts a string a reverses it.
var reverse = function(string, output = "") {
  //base case: if the string is empty
  if(string.length === 0){
    return output;
  }
  //recursive case
  //access the last index of the string 
  //call reverse on the string and slice(access string, start at end, slice 1 off)
  return output += string[string.length - 1] + reverse(string.slice(string, string.length - 1, 1), output);
  
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  //base case if string length is 0 return true
  if(string.length === 0){
    return true;
  }
  if(string.includes(" ")){
   return true;
  }
  //if the end of the string and the beginning of the string are the same then return true
  if(string[string.length - 1].toUpperCase() !== string[0].toUpperCase()){
    return false;
  } 
  //return function with string, sliced off 1 element from back of string
  return palindrome(string.slice(1, string.length - 1));
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
// ATTENTION DO NOT LEAVE COMMENTS IN THIS FUNCTION. The test is looking for any ('/').
var multiply = function(x, y, sum = 0) {
  if(x === 0 || y === 0){
    return sum;
  }
  if(x < 0 && y < 0){
    sum -= x;
    return multiply(x, y + 1, sum);
  }
  sum += x;
  return multiply(x, y - 1, sum);
};

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object. Don't pseudocode this problem
var divide = function(x, y) {
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  //base case if both strings are empty
  //that means we never hit the second case of the 0 index not matching
  if(str1.length === 0 && str2.length === 0){
    return true;
  }
  //check if the first index of both strings don't match, return false
  if(str1[0] !== str2[0]){
    return false;
  }
  //call the function with the first index sliced off both strings
  return compareStr(str1.slice(1), str2.slice(1));
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str, array = []){
  //if the string is empty, return the output array
  if(str.length == 0){
    return array;
  }
  //push the first element of string into output array
  array.push(str[0]);
  //return function with 1 value sliced off front of string and output array
  return createArray(str.slice(1), array);
};

// 17. Reverse the order of an array
var reverseArr = function (array, output = []) {
  //check if array is empty/length is 0
  if(array.length === 0){
    return output;
  }
  //push last element of array into output
  output.push(array[array.length - 1]);
  //call function with array, slice last element and output var
  return reverseArr(array.slice(array, array.length - 1, 1), output);
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length, output = []) {
  //if the length reaches 0, return output array 
  if(length === 0){
    return output;
  }
  //push the value into the output array
  output.push(value);
  //call the function with the value, length - 1, and output variable
  return buildList(value, length - 1, output);
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value, sum = 0) {
  //base case if array is empty
  if(array.length === 0){
    return sum;
  }
  //if first element of array is equal to the value
  if(array[0] === value){
    //accumulate 1
    sum += 1;
  }
  //return the function with the next value at array[0]
  return countOccurrence(array.slice(1), value, sum);
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback, output = []) {
  //base case array is empty
  if(array.length == 0){
    return output;
  }
  //each iteration we need to push array[0] through the callback function
  //push first index value(passed through callback function) into the output array
  output.push(callback(array[0]));
  //return the function with new array[0] and other parameters
  return rMap(array.slice(1), callback, output);
};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
  //negative n should return null
  if(n < 0){
    return null;
  }
  //if n is 0, return 0
  if(n === 0){
    return 0;
  }
  //if n is 1, return 1
  if(n === 1){
    return 1;
  }
  //call function and subtract 1 from n
  //call function and subtract 2 from n
  return nthFibo(n - 1) + nthFibo(n - 2);
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input, output = []) {
  //when we reach end of array, return output
  if(input.length === 0){
    return output;
  }
  //push capitalized whole element into output
  output.push(input[0].toUpperCase())
  //return function with first element sliced off
  return capitalizeWords(input.slice(1), output);
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array) {
  //base if array has no length then return empty array
  if(array.length === 0){
    return [];
  }
  //assign var to recur call (array with 1 index through entire array sliced out)
  var capitalize = capitalizeFirst(array.slice(1));
  //add index 0 of index 0 (uppercased) and index 0 sliced to variable 
  capitalize.unshift(array[0].charAt(0).toUpperCase() + array[0].slice(1));
  //return the variable
  return capitalize;
};

// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, obj = {}) {
  //if the string length is 0
  if(str.length === 0){
    return obj;
  }
  //if the obj key (first element of string) is already talled, add 1 to it
  if(obj[str[0]]){
    obj[str[0]] += 1;
  } else {
    //else create that key and set equal to 1
    obj[str[0]] = 1;
  }
  //return function with first element of string sliced
  return letterTally(str.slice(1), obj);
};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list, output = []) {
  //if the list has been sliced to 0 length
  if(list.length === 0){
    return output;
  }
  //assign output to hold function call with first index sliced off list
  output = compress(list.slice(1));
  //if the 0 index of list doesn't match the first element inside output
  if (list[0] !== output[0]) {
    //push that value into the front of output
    output.unshift(list[0]);
  }
  return output;
};
// 32. Augment every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
  //if array has no length then just return the array 
  if(array.length === 0){
    return array;
  }
  //new variable to hold recur call with first index sliced
  var list = minimizeZeroes(array.slice(1));
  //check if values are 0's 
  if ((array[0] === 0 ^ list[0] === 0) || array[0] !== 0) {
    //add zero index of array to front of new variable
    list.unshift(array[0]);
  }
  return list;  
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
  //if array has no length return empty array
  if (array.length === 0){
     return [];
  }
  //assign recur call to new var with the entire array sliced
  var output = alternateSign(array.slice(0, array.length - 1));
  //assign new var value of whole array
  var lng = array.length;
  //if var remainder 2 is zero(if var is even)
  if (lng %2 === 0) {
    //if array ending is positive
    if (array[lng - 1] > 0) {
      //set pos array ending to neg array ending
      array[lng - 1] = -array[lng - 1];
    }
  } else {
    //if array ending is neg
    if (array[lng - 1] < 0) {
      //still set pos ending equal to neg ending
      array[lng - 1] = -array[lng - 1];
    }
  }
  //push array ending into var output
  output.push(array[lng - 1]);
  return output;
};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
  //check if string has elements
  if (str.length === 0){
   return '';
}
  //temporary variable to hold the entire string inside the recursive call
  //substring pulls values from the input "start" and the input "end"
  var temporary = numToText(str.substring(0, str.length - 1));
  //replacement will hold the value that the num will convert too
  var replacement;
  switch (str[str.length - 1]) {
    //switch case for nums 1 - 9
    case '1': replacement = 'one';
      break;
    case '2': replacement = 'two';
      break;
    case '3': replacement = 'three';
      break;
    case '4': replacement = 'four';
      break;
    case '5': replacement = 'five';
      break;
    case '6': replacement = 'six';
      break;
    case '7': replacement = 'seven';
      break;
    case '8': replacement = 'eight';
      break;
    case '9': replacement = 'nine';
      break;
    default: replacement = str[str.length-1];
      break;
  }
  //add temporary and replacement to get the string returned with the replacement values
  return temporary + replacement;
};

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
};



//-----------------------------------
// DON'T REMOVE THIS CODE -----------
//-----------------------------------

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {

  /**
   * Due to some node-related issues with spying on recursive functions,
   * it isn't possible to test them with sinon spies like so:
   *
   *   var originalSum = sum;
   *   sum = sinon.spy(sum);
   *
   *   sum([1, 2, 3, 4, 5, 6]);
   *
   *   // callCount will always 1 causing, this test to always fail in node :(
   *   expect(sum.callCount).to.be.above(1);
   *
   *   sum = originalSum;
   *
   * However, we can work around this by using proxies!
   * If you reassign the function to a proxy and use the `apply` trap,
   * you can make a `proxyCallCount` property on the function,
   * increment it each time it's called, and then test that instead.
   *
   *   sum.proxyCallCount = 0;
   *   sum([1, 2, 3, 4, 5, 6]);
   *   expect(sum.proxyCallCount).to.be.above(1);
   *
   * MDN Proxies: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
   * MDN Proxy Apply Trap: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply
   */
  const createSpyProxy = (func) => {
    func.toString = func.toString.bind(func);

    const recursiveFunctionCallCounterHandler = {
      apply(target, thisArg, args) {
        target.proxyCallCount = target.proxyCallCount ? target.proxyCallCount + 1 : 1;
        return target.apply(thisArg, args);
      },
    };

    return new Proxy(func, recursiveFunctionCallCounterHandler);
  };

  factorial = createSpyProxy(factorial);
  sum = createSpyProxy(sum);
  arraySum = createSpyProxy(arraySum);
  isEven = createSpyProxy(isEven);
  sumBelow = createSpyProxy(sumBelow);
  range = createSpyProxy(range);
  exponent = createSpyProxy(exponent);
  powerOfTwo = createSpyProxy(powerOfTwo);
  reverse = createSpyProxy(reverse);
  palindrome = createSpyProxy(palindrome);
  modulo = createSpyProxy(modulo);
  multiply = createSpyProxy(multiply);
  divide = createSpyProxy(divide);
  gcd = createSpyProxy(gcd);
  compareStr = createSpyProxy(compareStr);
  createArray = createSpyProxy(createArray);
  reverseArr = createSpyProxy(reverseArr);
  buildList = createSpyProxy(buildList);
  countOccurrence = createSpyProxy(countOccurrence);
  rMap = createSpyProxy(rMap);
  countKeysInObj = createSpyProxy(countKeysInObj);
  countValuesInObj = createSpyProxy(countValuesInObj);
  replaceKeysInObj = createSpyProxy(replaceKeysInObj);
  fibonacci = createSpyProxy(fibonacci);
  nthFibo = createSpyProxy(nthFibo);
  capitalizeWords = createSpyProxy(capitalizeWords);
  capitalizeFirst = createSpyProxy(capitalizeFirst);
  nestedEvenSum = createSpyProxy(nestedEvenSum);
  flatten = createSpyProxy(flatten);
  letterTally = createSpyProxy(letterTally);
  compress = createSpyProxy(compress);
  augmentElements = createSpyProxy(augmentElements);
  minimizeZeroes = createSpyProxy(minimizeZeroes);
  alternateSign = createSpyProxy(alternateSign);
  numToText = createSpyProxy(numToText);
  tagCount = createSpyProxy(tagCount);
  binarySearch = createSpyProxy(binarySearch);
  mergeSort = createSpyProxy(mergeSort);

  module.exports = {
    factorial,
    sum,
    arraySum,
    isEven,
    sumBelow,
    range,
    exponent,
    powerOfTwo,
    reverse,
    palindrome,
    modulo,
    multiply,
    divide,
    gcd,
    compareStr,
    createArray,
    reverseArr,
    buildList,
    countOccurrence,
    rMap,
    countKeysInObj,
    countValuesInObj,
    replaceKeysInObj,
    fibonacci,
    nthFibo,
    capitalizeWords,
    capitalizeFirst,
    nestedEvenSum,
    flatten,
    letterTally,
    compress,
    augmentElements,
    minimizeZeroes,
    alternateSign,
    numToText,
    tagCount,
    binarySearch,
    mergeSort,
  };
}

//-----------------------------------
