const Trie = function () {
  this.root = {};
};

Trie.prototype.insert = function (word) {
  // we grab the root, and then iterate through the word
  let node = this.root;

  for (const char of word) {
    // if the character doesn't exist in the node, we create a new key with an empty object
    if (!(char in node)) {
      node[char] = {};
    }
    // we then move to the next node
    node = node[char];
  }
  // once we've iterated through the word, we set the last node to be a word
  node.isWord = true;
};

Trie.prototype.search = function (word) {
  let node = this.root;

  for (const char of word) {
    if (!(char in node)) {
      return false;
    }
    node = node[char];
  }
  return node.isWord === true;
};

Trie.prototype.startsWith = function (prefix) {
  let node = this.root;

  for (const char of prefix) {
    if (!(char in node)) {
      return false;
    }
    node = node[char];
  }
  return true;
};

// Example usage:
const trie = new Trie();
trie.insert('apple');
console.log(trie.search('apple')); // true
console.log(trie.search('app')); // false
console.log(trie.startsWith('app')); // true
trie.insert('app');
console.log(trie.search('app')); // true
