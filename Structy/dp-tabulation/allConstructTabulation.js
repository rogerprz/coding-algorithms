//  Write a fn that accepts a target string and an array of strings.
// The fn should return a 2D array containing all of the ways that the "target" can be constructed
// by concatenating elements of the the "wordBank" array.

// DOES NOT WORK BUT CORRECT SOLUTION
const allConstructTabulation = (target, wordBank) => {
  const table = Array(target.length + 1)
    .fill()
    .map(() => []);

  table[0] = [[]];

  for (let i = 0; i <= target.length; i++) {
    for (const word of wordBank) {
      const subWord = target.slice(i, i + word.length);
      if (subWord === word) {
        const newCombination = table[i].map((subArray) => [...subArray, word]);

        table[i + word.length].push(...newCombination);
      }
    }
  }

  return table[target.length];
};

console.log('Result: 2 ways: ', allConstructTabulation('purple', ['purp', 'p', 'ur', 'le', 'purpl']));
// console.log('Result: 4 ways:', allConstructTabulation('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c']));
// console.log('Result: 0 ways:', allConstructTabulation('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']));
// console.log('Result: 0 ways: ', allConstructTabulation('', ['cat', 'dog', 'mouse']));
// console.log('Result: 4 ways: ', allConstructTabulation('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't']));

// console.log('Result: 0 ways:', allConstructTabulation('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['ee', 'eeee', 'eee', 'eeeeeee']));
