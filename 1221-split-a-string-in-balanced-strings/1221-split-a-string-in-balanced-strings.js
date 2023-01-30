/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let total = 0;
    let openCount = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] == 'R') {
            openCount++
        } else {
            openCount--
        }
            
        if (openCount == 0) {
            total++
        }
    }
    
    return total
};