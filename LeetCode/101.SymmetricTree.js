const isSymmetric = function (root) {
  if (root.left === null && root.right) return false;
  if (root.left && root.right === null) return false;
  if (!root.left && !root.right) return true;

  const leftStack = [root.left, root.right];

  console.log('NODE:', leftStack);

  while (leftStack.length > 0) {
    const leftNode = leftStack.shift();
    const rightNode = leftStack.shift();
    if (leftNode.val !== rightNode.val) {
      console.log('FALSE:', leftNode, rightNode);
      return false;
    }
    if (leftNode.right === null && rightNode.left) return false;
    if (leftNode.right && rightNode.left === null) return false;
    if (leftNode.right && rightNode.left) {
      leftStack.push(leftNode.right);
      leftStack.push(rightNode.left);
    }
    if (leftNode.left === null && rightNode.right) return false;
    if (leftNode.left && rightNode.right === null) return false;

    if (leftNode.left && rightNode.right) {
      leftStack.push(leftNode.left);
      leftStack.push(rightNode.right);
    }
  }
  return true;
};

// Input: root = [1,2,2,3,4,4,3]
// Output: true
isSymmetric([1, 2, 2, 3, 4, 4, 3]);
