/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    var sum = 0;
    for (i = 1; i < num; i++) {
        if (num % i == 0) {
            sum = sum + i;
        }
    }
    
    if (sum == num) {
        return true;
    }
    
    return false;
};