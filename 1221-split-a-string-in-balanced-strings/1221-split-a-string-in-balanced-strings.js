/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let counter = 0;
    let result = 0;
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "L") {
            counter--;
        } else {
            counter++;
        }
        
        if (counter === 0) result++;
        
    }
    
    return result;
};