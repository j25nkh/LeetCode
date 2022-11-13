/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    let sum = 0;
    let numArr = Array.from(String(num), Number);
    
    if (numArr.length === 1) {
        return num;
    }
    
    for (const item of numArr) {
        sum += item;
    }
    
    return addDigits(sum);
};