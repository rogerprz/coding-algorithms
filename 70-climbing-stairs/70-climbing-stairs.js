/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
 if (n <= 2) return n 
  
  let answer = [1, 2]
  
  for (let i = 2; i < n; i++){
    console.log('i',i, 'n:', n, 'A:', answer )
    answer.push(answer[i - 2] + answer[i - 1])
  }
  return answer.pop()
//   
};

// var climbStairs = function(n) {
//     let a = 1, b = 2, next;
    
//     for(let i = 3; i <= n; i++) {
//         next = a + b;
//         a = b;
//         b = next;
//     }
//     return n === 1 ? a : b;
// };


/* 
1 -> 1
2 -> 2 (1+1 | 2+0)
3 -> 3 (1+1+1 | 2+1 | 1+2)
4 -> 5 (1+1+1+1 | 2+1+1 | 2+2 | 1+2+1 | 1+1+2)
and so on

This is exactly a fibonacci sequence
Each next amount of steps equals to sum of previous 2
1 -> 2 -> 3 -> 5 -> 8 -> 13
*/
// var climbStairs = function(n) {
//   let a = 0;
//   let b = 1;
//   for (let i = 0; i < n; i++) {
//     [a, b] = [b, a + b];
//   }
//   return b;
// };





















//  if (n <= 2) return n

//   var arr = [0,1,2]
//   for(let i = 3; i <= n; i++) {
//     arr[i] = arr[i-1] + arr[i-2];
//   }
//   return arr[n];