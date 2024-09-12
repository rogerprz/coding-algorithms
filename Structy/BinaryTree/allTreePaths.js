/* eslint-disable consistent-return */
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f
const allTreePaths = (root) => {
  const explore = (node) => {
    if (!node) return;

    if (!node.left && !node.right) {
      return [[node.val]];
    }

    const allPaths = [];

    const leftPath = explore(node.left);
    for (const path of leftPath) {
      path.push(root.val);
      allPaths.push(path);
    }
    const rightPath = explore(node.right);
    for (const path of rightPath) {
      path.push(root.val);
      allPaths.push(path);
    }

    return allPaths;
  };
  const res = explore(root);
  return res.map((array) => array.reverse());
};
console.log(allTreePaths(a)); // ->
// [
//   [ 'a', 'b', 'd' ],
//   [ 'a', 'b', 'e' ],
//   [ 'a', 'c', 'f' ]
// ]
