/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    
    if (n > 536870911) {
        n = n / 16;
    }
    
    let result = Math.log(n) / Math.log(2);
    
    
    
    if (Number.isInteger(result)) {
        return true;
    }
    
    return false;
   
}
