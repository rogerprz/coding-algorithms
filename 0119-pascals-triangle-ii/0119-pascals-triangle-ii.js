/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let ans = new Array(rowIndex+1)
    ans[0]=ans[rowIndex]=1
    
    for( let i=1, up=rowIndex;i<rowIndex;i++,up--)
        ans[i] = ans[i-1]*up/i
    return ans
};