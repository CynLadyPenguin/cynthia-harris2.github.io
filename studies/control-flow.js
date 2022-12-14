/**
 *  CONTROL FLOW
 * 
 * Control flow is how the computer reads your code from top to bottom. There are several ways to interrupt the control flow. Functions, conditionals, and loops. Since functions
 * and loops have their own studies page, I will focus on the conditionals for the control flow studies page.
 * 
 * 
 * 0. IF/ELSE IF/ELSE STATEMENTS
 * 
 * If else if conditionals are used to set the computer to comb through certain conditions and return the true one. The syntax is if (condition1){}else if(condition2){}else{}
 * In between the conditions, you would set the computer to do a certain action if the condition is true. The control flow will only look for the first true condition and stop
 * immediately after implementing the action. This is why it's important to set up conditionals in a way that creates best possible flow for your code. 
 * The first part of an If/else if conditional is the if statement. The if statement is a statement that produces a true/false boolean condition.
 * 
 * Example: 
 * if(x === x){  //in this if statement we are looking to evaluate if x is strictly equal to x. In this case, the if statement should return true if the statement is true.
 * return true;  //this if statement will return true because the letter x is strictly equal to the letter x.
 * }
 * 
 * Example:
 if("Array" === "array"){
  console.log("array");
} else if ("Array" === "String"){
  console.log("String");
} else if("Array === "Array"){
  console.log("Array");  //Should log to the console "Array"
} else {
  console.log("false")
}
 *  
 * 
 * 1. SWITCH STATEMENTS
 * 
 * A switch statment is very similar to an if-else if chain. The big difference is syntax and the fact that instead of looking down the chain for the first true value, the 
 * computer is looking for a specific value that it has been asked to find. An example is below. 
 * 
 * Example:
 * function getSnackOfTheDay(num) {
 switch (num) {
  case 1:
   return 'Chips';
  case 2:
   return 'Carrots';
  case 3:
   return 'Chocolate';
  case 4:
   return 'Coconut';
  case 5:
   return 'Crackers';
  case 6:
   return 'Chicken Wings';
  case 7:
   return 'Cashews';
 }
}
console.log(getSnackOfTheDay(4)) // should log "Coconut" to the console
 */