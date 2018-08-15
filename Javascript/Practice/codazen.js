

// let str = 'abcdef'
// function reverseStr(str){
//   let newArr = []
//   let array = str.split("")
//   array.forEach(elem=>{
//     newArr.unshift(elem)
//   })
//   return newArr.join("")
// }
// console.log(reverseStr(str))

// let newArr = []
// function recursiveRevStr(str){
//   if (str.length <= 1) {
//     return str;
//   }
//   return recursiveRevStr((str.substring(1) + str[0]));

// }


// console.log(recursiveRevStr(str))
// don't creat new aray,
// [0, 1, 0, 0, 2, 3] => [1, 2, 3, 0, 0, 0]
// let arr = [0, 1, 0, 0, 2, 3]
// function sortArray(arr){
//   let size = arr.length
//   for (let i = 0; i <size;i++) {
//     if (arr[i] === 0){
//       arr.splice(arr[i])
//     }
//   }
//   console.log(arr)
//   return arr
//
//   }
// let arr = [0, 1, 0, 0, 2, 3]
// function sortArray(arr){
//   let count = 0
//   for (let i = 0; i <arr.length;i++) {
//     console.log("elem",arr[i]);
//     if (arr[i] === 0){
//       count ++
//       arr.splice(i, 1)
//
//     }
//   }
// console.log("what is ",arr, count)
//   return arr
// }

let arr = [0, 1, 0, 0, 2, 3]
function sortArray(arr){
  let count = 0
  for (let i = 0; i <arr.length;i++) {
    if (arr[i] === 0){
      count ++
      arr.splice(i, 1)
      // if the i-- is not in place the count will skip the index 2 or the zero after the 1.
      i--
    }
  }
  for (let j = 0;j<count;j++){ arr.push(0)}
  return arr
}

  console.log(sortArray(arr))
