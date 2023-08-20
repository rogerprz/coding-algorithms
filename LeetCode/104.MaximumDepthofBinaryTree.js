const maxDepth = function (root) {
  if (!root) return 0;

  const determineMaxDepth = (node) => {
    if (!node) return 0;

    const leftMaxDepth = determineMaxDepth(node.left);
    const rightMaxDepth = determineMaxDepth(node.right);

    return Math.max(leftMaxDepth, rightMaxDepth) + 1;
  };
  return determineMaxDepth(root);
};

// Input: root = [3,9,20,null,null,15,7]
// Output: 3
maxDepth([3, 9, 20, null, null, 15, 7]);
