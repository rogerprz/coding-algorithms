const maxDepth = function (root) {
  // NOT MY SOLUTION
  if (root == null) return 0;

  const leftDepth = maxDepth(root.left);
  const rightDepth = maxDepth(root.right);

  const result = Math.max(leftDepth, rightDepth) + 1;
  return result;
};

// Input: root = [3,9,20,null,null,15,7]
// Output: 3
maxDepth([3, 9, 20, null, null, 15, 7]);
