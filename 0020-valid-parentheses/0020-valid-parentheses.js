/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let arr = [];
    
    for (i = 0; i < s.length; i++) {
        if (s.charAt(i) === '(') {
            arr.push('s')
        } else if (s.charAt(i) === '{') {
            arr.push('m')
        } else if (s.charAt(i) === '[') {
            arr.push('l')
        } else if (s.charAt(i) === ')') {
            if (arr.pop() !== 's') {
                return false
            }
        } else if (s.charAt(i) === '}') {
            if (arr.pop() !== 'm') {
                return false
            }
        } else if (s.charAt(i) === ']') {
            if (arr.pop() !== 'l') {
                return false
            }
        }
    }
    
    if (arr.length === 0) {
        return true;    
    }
    
    return false;    
};