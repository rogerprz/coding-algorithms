// Write a function that accepts a target string and an array of strings;
// The fn should return the number of ways that the "target" can be constructed by concatenating
// elements of the "wordBank" array.
// You can reuse elements of "wordBank" as many time as needed.

const countConstructTabulation = (target, wordBank) => {
  const table = Array(target.length + 1).fill(0);
  table[0] = 1;

  for (let i = 0; i < target.length; i++) {
    const current = table[i];
    for (const word of wordBank) {
      const subWord = target.slice(i, i + word.length);
      if (subWord === word) {
        table[i + word.length] += current;
      }
    }
  }

  return table[target.length];
};

//
console.log('Result: 2: ', countConstructTabulation('purple', ['purp', 'p', 'ur', 'le', 'purpl']));
console.log('Result: 1: ', countConstructTabulation('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']));
console.log(
  'Result: 0: ',
  countConstructTabulation('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eeee', 'eee', 'eeeeeee'])
);
