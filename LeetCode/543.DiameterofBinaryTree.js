const diameterOfBinaryTree = function (root) {
  // Not my solution
  let diameter = 0;

  const maxDiameter = (node) => {
    if (!node) return 0;

    const leftMax = maxDiameter(node.left);
    const rightMax = maxDiameter(node.right);

    diameter = Math.max(diameter, leftMax + rightMax);

    return Math.max(leftMax, rightMax) + 1;
  };
  maxDiameter(root);
  return diameter;
};

const root = [1, 2, 3, 4, 5];
console.log(diameterOfBinaryTree(root));
