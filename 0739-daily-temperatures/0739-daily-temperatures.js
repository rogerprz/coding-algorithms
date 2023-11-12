/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temps) {
    let result = Array(temps.length).fill(0)
    let stack = []

    for (let i = 0; i<temps.length; i++) {
        let currTemp = temps[i]
        while (stack.length > 0 && currTemp > stack[stack.length-1][0]) {
            const [temp, index] = stack.pop()
            result[index] = i - index
        }
        stack.push([currTemp, i])

    }

    return result
};