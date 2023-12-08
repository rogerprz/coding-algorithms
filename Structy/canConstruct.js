//  Write a function that accepts a target string and an array of strings.
// The fn should return bool indicating whether or not the `target` can be constructed by
// concat elements of the "wordBank" array.
const canConstruct = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === '') return true;

  for (const word of wordBank) {
    if (target.indexOf(word) === 0) {
      const subStr = target.slice(word.length);
      if (canConstruct(subStr, wordBank, memo)) {
        memo[target] = true;
        return true;
      }
    }
  }
  memo[target] = false;
  return false;
};

console.log('Result: true: ', canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']));
console.log('Result: false: ', canConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']));
console.log('Result: true: ', canConstruct('', ['cat', 'dog', 'mouse']));

console.log('Result: 2: ', canConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']));
console.log(
  'Result: false: ',
  canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eeee', 'eee', 'eeeeeee'])
);
