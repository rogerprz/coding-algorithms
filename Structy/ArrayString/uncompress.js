const unCompress = (s) => {
  let result = '';
  const stack = s.split('');

  const numbers = '0123456789';
  while (stack.length > 0) {
    const char = stack.pop();
    let num = stack.pop();
    let strNum = num;
    while (numbers.includes(stack[stack.length - 1])) {
      num = stack.pop();
      console.log('A:', num, numbers.includes(num));
      strNum = num + strNum;
    }

    result = char.repeat(Number(strNum)) + result;
  }
  return result;
};

console.log(unCompress('2c3a1t')); // -> 'ccaaat'
