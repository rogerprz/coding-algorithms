function mergeSortedArrays(arr1, arr2) {
  if (arr1.length === 0) return arr2;
  if (arr2.length === 0) return arr1;

  //   while loop
  //  if arr1 elem < arr2 elem, we push arr1 to new array
  // if arr1 elem > arr2 elem push arr2 elem to new array
  // if arr1 === arr2 we push arr1 and arr2 to new array
  // remove arr1 or 2 elem from array
  //  while arr1 and arr2 elem !== 0
  let result = [];
  while (arr1.length > 0 || arr2.length > 0) {
    console.log('------------------');
    console.log('R:', result);
    console.log('A1:', arr1, 'A2:', arr2);
    if (arr1[0] < arr2[0]) {
      const elem = arr1.shift();
      result.push(elem);
    } else {
      const elem = arr2.shift();
      result.push(elem);
    }
    if (arr1.length === 0 && arr2.lenth > 0) {
      const elem2 = arr2.shift();
      result.push(elem2);
    }
    if (arr2.length === 0 && arr1.length > 0) {
      const elem1 = arr1.shift();
      result.push(elem1);
    }
  }

  console.log('RRR:', result, arr1, arr2);
  return result;
}

const arr1 = [0, 3, 4, 31];
const arr2 = [4, 6, 30];

mergeSortedArrays(arr1, arr2);
