const gridTravelerTabulation = (m, n) => {
  const table = Array(m + 1)
    .fill()
    .map(() => Array(n + 1).fill(0));
  table[1][1] = 1;
  console.log('T:', table);
};

// console.log(gridTravelerTabulation(1, 1)); // 1
console.log(gridTravelerTabulation(2, 3)); // 3
// console.log(gridTravelerTabulation(3, 2)); // 3
// console.log(gridTravelerTabulation(3, 3)); // 6
// console.log(gridTravelerTabulation(18, 18)); // 2333606220
