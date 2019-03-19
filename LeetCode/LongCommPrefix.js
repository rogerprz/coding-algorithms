var longestCommonPrefix = function(strs) {
    console.log(strs);
    let arrayLen = strs.length
    let beginningChar = strs[0][0];
    let commonStr = ""
    let charCount = 0;
    for (let i = 0; i<=arrayLen;i++){
        console.log("i: ", i);
        console.log("STRS CHAR",strs[i][charCount])
        console.log("ArrayLen: ", arrayLen);
        if (beginningChar !== strs[i][charCount] ) {
            return commonStr
        }
        else if (i === arrayLen - 1){
            console.log("HERE!!")
            commonStr += strs[i][charCount];
            charCount +=1;
            beginningChar = strs[0][charCount]
            i = -1;
            console.log("charCount: ",charCount);
            console.log("CommonStr:",commonStr)

        }
    }
    console.log("COM:", commonStr);
    return commonStr
};

let array = ["flower","flow","flight"];

longestCommonPrefix(array);


// var longestCommonPrefix = function(strs) {
//     console.log("START: ",strs);
//     if (strs.length === 0) { return "";}
//     if (strs.length === 1) { return strs[0];}
//
//     let arrayLen = strs.length;
//     let beginningChar = strs[0][0];
//     let commonStr = "";
//     let charCount = 0;
//
//     for (let i = 0; i<arrayLen;i++){
//
//         console.log("i: ", i);
//         console.log("STRS CHAR",strs[i][charCount])
//         console.log("ArrayLen: ", arrayLen);
//
//         if (beginningChar !== strs[i][charCount] ) {
//             return commonStr
//         }
//         else if (i === arrayLen - 1){
//             console.log("HERE!!")
//             commonStr += strs[i][charCount];
//             charCount +=1;
//             beginningChar = strs[0][charCount]
//             i = -1;
//             console.log("charCount: ",charCount);
//             console.log("CommonStr:",commonStr)
//
//         }
//     }
//     console.log("COM:", commonStr);
//     return commonStr
// };
