function toCamelCase(str){
  if (str === ""){
    return str
  } else {
    let array = str.split(/[-_]/)
    let newWord
    for(i=1;i<array.length;i++){
      newWord= array[i][0].toUpperCase() + array[i].substr(1)
      array[i] = newWord
    }
    console.log(array.join(""));
    return array.join("")
  }
}

// function toCamelCase(str){
//       var regExp=/[-_]\w/ig;
//       return str.replace(regExp,function(match){
//             return match.charAt(1).toUpperCase();
//        });
// }


// toCamelCase('')
// , '', "An empty string was provided but not returned")

toCamelCase("the_stealth_warrior")

// , "theStealthWarrior", "toCamelCase('the_stealth_warrior') did not return correct value")

toCamelCase("The-Stealth-Warrior")

// , "TheStealthWarrior","

toCamelCase("A-B-C")

// , "ABC", "toCamelCase('A-B-C') did not return correct value")
