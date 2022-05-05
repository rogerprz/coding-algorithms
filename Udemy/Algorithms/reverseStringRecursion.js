function reverseStrRecursion(str, count) {
  console.log('SSS:', str, count);
  if (str.length === count) {
    return str;
  }
  const value = str.slice(0);
  console.log('VVV:', value);
  return reverseStrRecursion(str + value, count++);
}

console.log(reverseStrRecursion('Hello'));
