const isValid = function (s) {
  const stack = [];
  const map = {
    '(': ')',
    '{': '}',
    '[': ']'
  };

  for (let i = 0; i < s.length; i++) {
    const par = s[i];
    if (par in map) {
      stack.push(par);
    } else {
      const stackPar = stack.pop();
      if (par !== map[stackPar]) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

console.log(isValid('()[]{}'));
