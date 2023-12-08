//  write a function fib(n) that takes in a number as an arg.
//  the fn should return the n-th number of the fib sequence

// The 0th number of the sequence is 0;
// the 1st number of the sequence is 1.

// To generate the next number of the sequence, we sum the previous two.
// n:   0,2,3,4,5,6,7,8, 9
// fib: 0,1,1,2,3,5,8,13,21,34
const fibTabulation = (n) => {
  const table = Array(n + 1).fill(0);
  if (table.length === 1) return 0;

  table[1] = 1;

  for (let i = 1; i < n; i++) {
    const first = table[i - 1];
    const current = table[i];
    table[i + 1] = first + current;
  }
  //   console.log(table);
  return table[n];
};
console.log('Output:0:', fibTabulation(0));
console.log('Output:8:', fibTabulation(6));
console.log('Output:13:', fibTabulation(7));
console.log('Output:21:', fibTabulation(8));
console.log('Output:12586269025:', fibTabulation(50));
