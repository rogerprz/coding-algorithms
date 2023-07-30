const generateParenthesis = function (n) {
  // Not my solution.
  const stack = [];
  const results = [];

  const backtracking = (numOpen, numClosed) => {
    // establish base case
    if (numOpen === numClosed && n === numOpen) {
      results.push(stack.join(''));
      return;
    }

    if (numOpen < n) {
      stack.push('(');
      backtracking(numOpen + 1, numClosed);
      stack.pop();
    }

    if (numOpen > numClosed) {
      stack.push(')');
      backtracking(numOpen, numClosed + 1);
      stack.pop();
    }
  };

  backtracking(0, 0);

  return results;
};

const n = 3;

console.log(generateParenthesis(n));
