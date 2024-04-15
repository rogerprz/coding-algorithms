// Pin images come in various sizes. You’re trying to figure out what is the best way to show the minimum number of pins per column that fits on the screen.

// Given a max screen height of each column on the page and a list of pin heights, return the minimum number of pins used to fit the height of the screen. (assume there is an unlimited supply of Pins with all heights)

// pinHeights = [3, 5, 7]

// maxHeight = 4 → return -1
// (cannot fit the screen size)

// maxHeight = 10 → return 2
// (3+7 would be the chosen pin heights)

// maxHeight  = 14 → return 2
// (7+7 would be the chosen pin heights)

function minScreens(pinHeights, maxHeight) {
  console.log('Start');
  // const count = Infinity;
  let min = Infinity;
  const explore = (pinHeights, maxHeight, count) => {
    // [12, 5, 1]
    // base case
    if (maxHeight === 0) {
      // console.log("REturn:", count)
      return count;
    }
    if (maxHeight < 0) {
      return null;
    }

    for (let i = 0; i < pinHeights.length; i++) {
      const height = pinHeights[i];
      explore(pinHeights, maxHeight - height, count++);
    }
    // console.log("LAS:", count)
    return count;
  };
  return explore(pinHeights, maxHeight, 0);
  // return count
}
const pinHeights = [7, 5, 3];
const maxHeight = 10;

// console.log(minScreens(pinHeights, maxHeight))
console.log(minScreens(pinHeights, 4)); // -1
console.log(minScreens(pinHeights, maxHeight)); // 2
console.log(minScreens([3, 6, 7], 5)); // 2
console.log(minScreens([12, 5, 1], 25)); // 3, 12+12+1
console.log(minScreens([7, 6, 2], 15)); // 3

// [3, 6, 7], 5
// [12, 5, 1], 25
// 7, 6, 2.   15

// const sorted = pinHeights.sort((a,b)=> b-a)
//   let prevNum = null
//   let prevRemainder = null
//   let stack = [];
//   let count = 0
//   let total = 0;
//   let min = Infinity
//   let foundAnswer = false
//   for (let i = 0; i < sorted.length; i++) {
//     const num = sorted[i]
//     if (maxHeight < num ) continue
//     if (total === maxHeight) return count
//     const remainder = maxHeight % num

//     if (remainder % num === 0) {
//       min = Math.min(Math.floor(maxHeight/num), min)
//       foundAnswer = true
//     } else {
//       total += num
//       count++
//     }
//   }
//   if (total === maxHeight) return count
//   return foundAnswer ? min : -1
