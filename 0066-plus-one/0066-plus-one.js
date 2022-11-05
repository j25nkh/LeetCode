/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let count = 0;
    for (let i = digits.length - 1; i >= 0 ; i--) {
        if (digits[i] !== 9) {
            digits[i] += 1;
            return digits;
        }
        
        digits[i] = 0;
        count += 1;
    }
    
    if (count === digits.length) {
        
        digits.unshift(1);
    }
    
    return digits;    
};