function firstRecurringChar(array) {
  let obj = {};
  for (number in array) {
    // console.log(obj, array[number], array);
    if (obj[array[number]] !== undefined) {
      return array[number];
    } else {
      obj[array[number]] = number;
    }
  }
  return undefined;
}
console.log('-----Start-------');

firstRecurringChar([2, 5, 1, 2, 3, 5, 1, 2, 4]);
console.log('-----Start-------');

firstRecurringChar([2, 1, 1, 2, 3, 5, 1, 2, 4]);
console.log('-----Start-------');

firstRecurringChar([2, 3, 4, 5]);
