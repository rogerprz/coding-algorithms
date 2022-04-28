class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (currentNode) {
        if (value < currentNode.value) {
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
      return this;
    }
  }

  lookup(value) {
    // lookup
  }
}

const tree = new BinarySearchTree();
//     9
//   4    20
// 1  6 15  170
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(1);
tree.insert(170);
tree.insert(15);

console.log('T:', tree);
const treeStr = JSON.stringify(traverse(tree.root));
console.log('JSON:', treeStr);

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);

  return tree;
}
