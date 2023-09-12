const isSameTree = function (p, q) {
  // NOT A WORKING SOLUTION, but close
  const leftTree = p;
  const rightTree = q;
  if (rightTree && leftTree === undefined) return false;
  if (leftTree && rightTree === undefined) return false;
  if (leftTree === undefined && rightTree === undefined) return true;
  // if (leftTree.val !== rightTree.val) return false
  const stackOne = [leftTree];
  const stackTwo = [rightTree];

  while (stackOne.length > 0 || stackTwo.length > 0) {
    const leftTree = stackOne.pop();
    const rightTree = stackTwo.pop();
    console.log('R:', rightTree, leftTree);
    if (rightTree && leftTree === undefined) return false;
    if (leftTree && rightTree === undefined) return false;
    if (rightTree === leftTree) return true;
    if (rightTree.val === leftTree.val) {
      stackOne.push(leftTree.left);
      stackTwo.push(rightTree.left);

      stackOne.push(leftTree.right);
      stackTwo.push(rightTree.right);
    } else {
      return false;
    }
  }

  return true;
};

console.log(isSameTree([1, 2, 3], [1, 2, 3]));
