const invertTree = function (root) {
  if (!root) return root;

  let tree = root;
  let stack = [tree];

  while (stack.length > 0) {
    const node = stack.pop();

    let leftTemp = node.left;
    let rightTemp = node.right;

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
