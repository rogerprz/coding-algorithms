//  Write a fn that accepts a target string and an array of strings.
// The fn should return a 2D array containing all of the ways that the "target" can be constructed
// by concatenating elements of the the "wordBank" array.

const allConstruct = (target, wordBank) => {
  // test
  console.log('T:', target);
  return [target, wordBank];
};

console.log('Result: true: ', allConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c']));
console.log('Result: false:', allConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']));
console.log('Result: true: ', allConstruct('', ['cat', 'dog', 'mouse']));
console.log('Result: True: ', allConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't']));

console.log('Result: 2 ways: ', allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']));
console.log(
  'Result: false:',
  allConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eeee', 'eee', 'eeeeeee'])
);
