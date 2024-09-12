// What is a callback function in JavaScript?
setTimeout(() => {
  console.log('timer');
}, 5000);

function x(y) {
  console.log('x');
  y();
}

x(() => {
  console.log('y');
});
//  Javascript is a synchronous, single-threaded language. This means that it can execute only one task at a time.

// Blocking the main thread
// The call stack is the main thread.
// Whatever is executed in the page is part of the call stack
// We should never block or call stack, we need to use async operations to avoid blocking the call stack
// Power of callbacks

// Dive deep on event listeners

// Scope demo with event listeners

// Garbage collection & removeEventListener
// let count = 0;

// const isId = document.getElementById('clickMe');
// document.getElementById('clickMe').addEventListener('click', () => {
//   console.log('clicked', ++count);
// });

function attachEventListener() {
  let count = 0;
  document.getElementById('clickMe').addEventListener('click', function xyz() {
    console.log('Attach:', ++count);
  });
}
attachEventListener();
