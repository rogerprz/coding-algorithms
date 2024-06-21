// Function statement
function greet() {
  console.log('hi');
}
// Function expression
var greetMe = function () {
  console.log('Hi Tony');
};

// What is the difference between function statement and function expression?
// Function statement is hoisted to the top of the code and can be called before it is defined.

// Anonymous function
function any() {
  console.log('Hi Tony');
}

//  Named function expression
const named = function funcExpression() {
  console.log('Hi Tony');
};
//  Difference between parameters and arguments
// arguments are what you pass into the functions and parameters are what the function accepts

// First class functions
// The ability to use functions as values is a first class function.
// To pass functions as arguments to other functions, and to return functions as values from other functions.
// Functions are first class citizens in javascript.

// Arrow functions
