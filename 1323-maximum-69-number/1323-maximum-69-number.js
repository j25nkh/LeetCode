/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    let numStr = num.toString();
    
    for (let i = 0; i < numStr.length; i++) {
        if (numStr[i] === '6') {
            return num + 3 * Math.pow(10, (numStr.length - 1 - i));
        } 
    }
    
    return num;
};