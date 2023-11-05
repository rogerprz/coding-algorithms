/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    if (s.length === 0) return s

    const arr = s.split('')
    const stack = []

    for (let i = 0; i < arr.length; i++) {
        const val = arr[i]
        if (val ==="(") stack.push(val)
        else if (val === ")"){
            if (stack.length === 0) {
                arr[i] = ""
            } else {
                stack.pop()
            }
        }
    }
    if (stack.length> 0) {
        for (let i = arr.length; i>=0; i--){
            const val = arr[i]
            if (stack.length === 0) break
            if (val ==="(" && stack[stack.length-1] ==="(") {
                arr[i] = ""
                stack.pop()
            }
            if (val ===")" && stack[stack.length-1] ===")") {
                arr[i] = ""
                stack.pop()
            }
        }
    }
    console.log('S:', stack)
    return arr.join("")
};