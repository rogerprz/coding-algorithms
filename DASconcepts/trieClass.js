/* eslint-disable max-classes-per-file */

class Trie {
  constructor() {
    this.root = {};
  }

  insert(word) {
    let node = this.root;
    for (const char of word) {
      if (!node[char]) {
        node[char] = {};
      }
      node = node[char];
    }
    node.isEndOfWord = true;
  }
}

// Example usage:
const trie = new Trie();
trie.insert('apple');
trie.insert('apron');
console.log(trie.search('apple')); // true
console.log(trie.search('app')); // false
console.log(trie.startsWith('app')); // true
trie.insert('app');
console.log(trie.search('app')); // true
