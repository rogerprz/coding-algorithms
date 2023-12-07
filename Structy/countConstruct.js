// Write a function that accepts a target string and an array of strings;
// The fn should return the number of ways that the "target" can be constructed by concatenating
// elements of the "wordBank" array.
// You can reuse elements of "wordBank" as many time as needed.

const countConstruct = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === '') return 1;
  // if (target )

  let totalCount = 0;
  for (const word of wordBank) {
    if (target.indexOf(word) === 0) {
      const numOfWaysForRest = countConstruct(target.slice(word.length), wordBank, memo);
      totalCount += numOfWaysForRest;
    }
  }
  memo[target] = totalCount;
  return totalCount;
};

console.log('Result: 2: ', countConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']));
console.log('Result: 1: ', countConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']));
console.log(
  'Result: 0: ',
  countConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eeee', 'eee', 'eeeeeee'])
);
