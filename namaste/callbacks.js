// What is a callback function in JavaScript?
setTimeout(() => {
  console.log('Hello');
}, 1000);
function x(y) {
  console.log('x');
  y();
}

x(function y() {
  console.log('Hello');
});
//  Javascript is a synchronous, single-threaded language. This means that it can execute only one task at a time.

// Blocking the main thread

// Power of callbacks

// Dive deep on event listeners

// Scope demo with event listeners

// Garbage collection & removeEventListener
