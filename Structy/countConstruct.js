// Write a function that accepts a target string and an array of strings;
// The fn should return the number of ways that the "target" can be constructed by concatenating
// elements of the "wordBank" array.
// You can reuse elements of "wordBank" as many time as needed.

const countConstruct = (target, wordBank) => {
  if (target === '') return 1;
  // if (target )

  let totalCount = 0;
  for (const word of wordBank) {
    if (target.indexOf(word) === 0) {
      const numOfWaysForRest = countConstruct(target.splice(word.length), wordBank);
      totalCount += numOfWaysForRest;
    }
  }
  return totalCount;
};

console.log('Result: 2: ', countConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']));
console.log('Result: 1: ', countConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']));
console.log('Result: 0: ', countConstruct('eeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eeee', 'eee', 'eeeeeee']));
