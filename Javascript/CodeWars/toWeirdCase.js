function toWeirdCase(str){
  let arr = str.split(" ")
  console.log(arr);
  let weirdArr = []
  for (let i = 0; i < arr.length; i++) {
    // debugger;
    let word = arr[i].split("")
    for (let j = 0; j < word.length; j+=2) {
         word[j] = word[j].toUpperCase()
    }
    console.log('arr word',word);
    weirdArr.push(word.join(""))

  }
  return weirdArr.join(" ")
}

console.log(toWeirdCase('This is a test'));



// arr[i].split("").map(x =>{
//   x.toUpper
//   debugger
// })
