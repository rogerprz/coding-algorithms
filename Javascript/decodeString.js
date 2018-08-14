function decodeString(s) {
    let newArr = []
    let newStr = s.replace(/[\[\]]/g, "")
    console.log(newStr);
    debugger

    if (parseInt(newStr[0]) === /[\d]/){
      let pair = [newStr[0], newStr.splice(1)]
      console.log("what is pair",pair);
      newStr.push(pair)
    }
    console.log(newArr);

}
7/140

decodeString('4[ab]')
// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is repeated exactly k times. Note: k is guaranteed to be a positive integer.
//
// Note that your solution should have linear complexity because this is what you will be asked during an interview.
//
// Example
//
// For s = "4[ab]", the output should be
// decodeString(s) = "abababab";
//
// For s = "2[b3[a]]", the output should be
// decodeString(s) = "baaabaaa";
//
// For s = "z1[y]zzz2[abc]", the output should be
// decodeString(s) = "zyzzzabcabc".
