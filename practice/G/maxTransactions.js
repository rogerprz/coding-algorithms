function maxTransactions(transactions, initialTotal) {
  let total = initialTotal;
  let count = 0;

  for (const tx of transactions) {
    const num = tx * -1;
    if (num > 0) {
      total += num;
      count++;
    } else if (total > 0 && Math.abs(num) <= total) {
      total = total - Math.abs(num);
      count++;
    } else {
      break;
    }
  }

  return count;
}

// Test cases
// console.log(maxTransactions([-2, -3, 4, 1, 132], 0)); // Output: 4
console.log(maxTransactions([-2, 5, 1, 3, 2, -3, -1, 4, 1], 5)); // Output: 5
