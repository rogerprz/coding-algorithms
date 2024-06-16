// function x() {
//   var a = 7;
//   function y() {
//     console.log(a);
//   }
//   return y;
// }
// var z = x();
// console.log(z);
// z();

// A closure is a function along with it's a lexical scope is called a closure.
// Uses for closures:
// 1. Module Design Pattern
// 2. Currying
// 3. Function like once
// 4. Memoization
// 5. maintaining state in async world
// 6. setTimeouts
// 7. Iterators
// 8. Many more patterns

function z() {
  var b = 900;
  function x() {
    var a = 7;
    function y() {
      console.log(a, b);
    }
    y();
  }
  x();
}
z();
