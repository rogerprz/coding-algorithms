// lexical scope are the rules that govern how variable names are resolved in nested functions
// Closures are functions that refer to independent (free) variables. In other words, the function defined in the closure 'remembers' the environment in which it was created.
function init() {
  var name = 'Mozilla'; // name is a local variable created by init
  function displayName() {
    // displayName() is the inner function, that forms the closure
    console.log(name); // use variable declared in the parent function
  }
  displayName();
}
init();
function makeFunc() {
  const name = 'Outer function';
  return function displayName() {
    console.log(name);
  };
}
makeFunc();
const myFunc = makeFunc();
myFunc();

// const word = 'This is my world';
// String.prototype.join = function (separator) {
//   return this.split(' ').join(separator);
// };

// console.log(word.join('-'));

// function logMessageWithBind(...args) {
//   console.log(...args);
// }

// function logMessage(...args) {
//   return function () {
//     console.log(...args);
//     if (args[0] === 'Error') {
//       console.error(...args);
//     } else if (args[0] === 'Warning') {
//       console.warn(...args);
//     } else {
//       console.log(...args);
//     }
//   };
// }

// logMessage()('Hello', 'World'); // Hello World

// const errorMessage = logMessageWithBind.bind(null, 'Error:');
// errorMessage('Something went wrong'); // Error: Something went wrong

// const errorMessage2 = logMessage('Error', 'Test is wrong');
// errorMessage2(); // Error Something went wrong

// const warningMessage = logMessage('Warning', 'Test is wrong');
// warningMessage();
