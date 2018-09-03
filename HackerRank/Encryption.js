// For example, the sentence , after removing spaces is  characters long.  is between  and , so it is written in the form of a grid with 7 rows and 8 columns.
// console.log('hi');
function encryption(s) {
  let arr = s.split("")
  let arrays = []
  let start = Math.floor(Math.sqrt(arr.length))
  while (arr.length > 0){
    arrays.push(arr.splice(0, start));

    console.log(arrays);
  }
  debugger 


}
console.log('hi');

encryption("feedthedog")

output = 'fto ehg ee dd'
