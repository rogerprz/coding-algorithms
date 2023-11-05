/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temps) {
    const results =[]

    let l = 0 
    let r = 1

    let count = 0 
    while (l <= temps.length-2) {
        const leftTemp = temps[l]
        const rightTemp = temps[r]
        // console.log('----------------')
        // console.log( temps)
        // console.log('L',l, 'R:', r, 'COUNT:', count)
        // console.log(leftTemp, rightTemp, results)
        if (leftTemp < rightTemp) {
            count++
            results[l] = count
            count = 0
            l++
            r = l+1
        } 
        else if (r === temps.length-1) {
            count = 0 
            results[l] = 0
            l++
            r = l+1
        }
        else {
            count++
            r++
        }
    }

    results.push(0)

    return results
};