// Last solved: Oct 16, 2023
// Previous Solved: Aug 3, 2023

const invertTree = function (root) {
  if (!root) return root;
  const tree = root;
  const stack = [tree];

  while (stack.length > 0) {
    const node = stack.pop();

    const tempLeft = node.left;

    node.left = node.right;
    node.right = tempLeft;

    if (node.left) stack.push(node.left);
    if (node.right) stack.push(node.right);
  }
  return tree;
};
const invertTreeOld = function (root) {
  if (!root) return root;

  const tree = root;
  const stack = [tree];

  while (stack.length > 0) {
    const node = stack.pop();

    const leftTemp = node.left;
    const rightTemp = node.right;

    node.left = rightTemp;
    node.right = leftTemp;

    if (node.left) {
      stack.push(node.left);
    }

    if (node.right) {
      stack.push(node.right);
    }
  }
  return root;
};

// Input:
const root = [4, 2, 7, 1, 3, 6, 9];
// Output: [4,7,2,9,6,3,1]
invertTree(root);
invertTreeOld(root);
