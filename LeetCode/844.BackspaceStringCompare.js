const backspaceCompare = function (s, t) {
  if (s === t) return true;

  const loopString = (str) => {
    const stack = [];
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== '#') stack.push(str[i]);
      else stack.pop();
    }
    return stack.join('');
  };

  return loopString(s) === loopString(t);
};

console.log(backspaceCompare('ab#c', 'ad#c'));
