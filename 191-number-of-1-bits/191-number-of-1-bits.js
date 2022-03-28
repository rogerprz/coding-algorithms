/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
   let count = 0;
    
    while(n){
        
        // this will take out the right-most 1 of n    
        n = n & (n-1);
        
        // update counter
        count += 1
    }
    
    return count
};