class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export class BinarySearchTree {
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
    if (this.root === null) return false;

    let currentNode = this.root;
    while (currentNode) {
      if (value === currentNode.value) {
        return currentNode;
      }
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return false;
  }

  remove(value) {
    if (!this.root) return false;

    let currentNode = this.root;
    let parentNode = null;
    while (currentNode) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (value === currentNode.value) {
      }
    }
  }

  breadthFirstSearch() {
    let currentNode = this.root;
    let list = []; // Will be our answer
    let queue = []; // Keep track of our current level. Access children

    queue.push(currentNode);

    while (queue.length > 0) {
      // console.log('Q:', queue);
      currentNode = queue.shift(); // first item in queue
      console.log(currentNode.value);
      list.push(currentNode.value);

      if (currentNode.left) queue.push(currentNode.left);

      if (currentNode.right) queue.push(currentNode.right);
    }
    console.log('L:', list);
    return list;
  }

  breadthFirstSearchRecursive(queue, list) {
    if (!queue.length) return list;

    let currentNode = queue.shift();

    list.push(currentNode.value);

    if (currentNode.left) queue.push(currentNode.left);
    if (currentNode.right) queue.push(currentNode.right);

    return this.breadthFirstSearchRecursive(queue, list);
  }

  DFSInOrder() {
    return this.traverseInOrder(this.root, []);
  }
  DFSPreOrder() {
    return this.traversePostOrder(this.root, []);
  }
  DFSPostOrder() {
    return this.traversePostOrder(this.root, []);
  }

  traverseInOrder(node, list) {
    if (node.left) this.traverseInOrder(node.left, list);

    list.push(node.value);

    if (node.right) this.traverseInOrder(node.right, list);

    return list;
  }
  traversePreOrder(node, list) {
    list.push(node.value);
    if (node.left) {
      this.traversePreOrder(node.left, list);
    }
    if (node.right) {
      this.traversePreOrder(node.right, list);
    }

    return list;
  }

  traversePostOrder(node, list) {
    if (node.left) {
      this.traversePostOrder(node.left, list);
    }
    if (node.right) {
      this.traversePostOrder(node.right, list);
    }
    list.push(node.value);

    return list;
  }
}

// const tree = new BinarySearchTree();
//     9
//   4    20
// 1  6 15  170
// tree.insert(9);
// tree.insert(4);
// tree.insert(6);
// tree.insert(20);
// tree.insert(1);
// tree.insert(170);
// tree.insert(180);
// tree.insert(15);

// console.log('TTT:', tree);
// const treeStr = JSON.stringify(traverse(tree.root));
// console.log('JSON:', treeStr);
// const isHere = tree.lookup(16);

// tree.remove(4);
// const treeStr = JSON.stringify(traverse(tree.root));
// console.log('JSON:', treeStr);
// console.log('RRR:', tree);
// console.log('HH:', isHere);

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);

  return tree;
}

// remove(value) {
//   if (!this.root) return null;

//   let currentNode = this.root;
//   let prevNode = this.root;
//   while (currentNode) {
//     if (value < currentNode.value) {
//       prevNode = currentNode;
//       currentNode = currentNode.left;
//       if (currentNode.value === value) {
//         if (currentNode.left && currentNode.right) {
//           let replacementNode = currentNode.right;
//           prevNode.left = replacementNode;
//           prevNode.left.left = currentNode.left;
//         } else if (!currentNode.left && !currentNode.right) {
//           prevNode.left = null;
//         } else if (!currentNode.left && currentNode.right) {
//           let replacementNode = currentNode.right;
//           prevNode.left = replacementNode;
//         } else if (currentNode.left && !currentNode.right) {
//           let replacementNode = currentNode.left;
//           prevNode.left = replacementNode;
//         }
//         return this;
//       }
//     } else if (value > currentNode.value) {
//       prevNode = currentNode;
//       currentNode = currentNode.right;

//       if (currentNode.value === value) {
//         if (currentNode.left && currentNode.right) {
//           let replacementNode = currentNode.right;
//           prevNode.right = replacementNode;
//           prevNode.right.left = currentNode.left;
//         } else if (!currentNode.left && !currentNode.right) {
//           prevNode.right = null;
//         } else if (!currentNode.left && currentNode.right) {
//           let replacementNode = currentNode.right;
//           prevNode.left = replacementNode;
//         } else if (currentNode.left && !currentNode.right) {
//           let replacementNode = currentNode.left;
//           prevNode.left = replacementNode;
//         }
//         return this;
//       }
//     }
//   }
//   return null;
// }
