const countConstruct = (target, wordBank, memo = {}) => {};

console.log('Result: 2: ', countConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']));
console.log('Result: 1: ', countConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']));
console.log(
  'Result: 0: ',
  countConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eeee', 'eee', 'eeeeeee'])
);
