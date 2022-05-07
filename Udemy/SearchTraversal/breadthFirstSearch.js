import { BinarySearchTree } from '../Tree/BinarySearchTree.js';

class BFS extends BinarySearchTree {
  bfsTest() {}

  bfsRecursive(queue, list) {}

  DFSInOrder() {
    return this.traverseInOrder(this.root, []);
  }
  DFSPreOrder() {
    return this.traversePostOrder(this.root, []);
  }
  DFSPostOrder() {
    return this.traversePostOrder(this.root, []);
  }

  traverseInOrder(node, list) {}
  traversePreOrder(node, list) {}

  traversePostOrder(node, list) {}
}
//     9
//   4    20
// 1  6 15  170
const inOrder = [1, 4, 6, 9, 15, 20, 170];
const preOrder = [9, 4, 1, 6, 20, 15, 170];
const postOrder = [1, 6, 4, 15, 170, 20, 9];

const tree = new BFS();

tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);

// tree.bfsTest();
// console.log('R:', tree.bfsRecursive([tree.root], []));
console.log(tree.DFSInOrder(tree.root, []));
console.log(tree.DFSPreOrder(tree.root, []));
console.log(tree.DFSPostOrder(tree.root, []));
