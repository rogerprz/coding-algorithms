// Write a function 'canConstructTabulation (target, wordBank) that accepts a target string and an array of strings.
// The function should return a boolean indicating whether or not the
// "target can be constructed by concatenating elements of the "wordBank' array.
// You may reuse elements of "wordBank as many times as needed.

const canConstructTabulation = (target, wordBank) => {
  const table = Array(target.length + 1).fill(false);
  table[0] = true;
  console.log('T:', table);
  for (let i = 0; i < target.length; i++) {
    const current = table[i];
    if (current) {
      for (const word of wordBank) {
        const subTarget = target.slice(i, i + word.length);
        console.log('SUB:', subTarget);
        if (subTarget === word) {
          table[i + word.length] = true;
        }
      }
    }
  }
  return table[target.length];
};

console.log('Result: true: ', canConstructTabulation('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']));
console.log('Result: false:', canConstructTabulation('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']));
// console.log('Result: true: ', canConstructTabulation('', ['cat', 'dog', 'mouse']));
// console.log('Result: True: ', canConstructTabulation('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't']));

// console.log('Result: True: ', canConstructTabulation('purple', ['purp', 'p', 'ur', 'le', 'purpl']));
// console.log(
//   'Result: false:',
//   canConstructTabulation('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eeee', 'eee', 'eeeeeee'])
// );
