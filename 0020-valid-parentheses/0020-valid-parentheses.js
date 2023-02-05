/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let str = s[0];
    
    for (let i = 1; i < s.length; i++) {
        if (
            (str[str.length - 1] === '(' && s[i] === ')')
            || (str[str.length - 1] === '{' && s[i] === '}')
            || (str[str.length - 1] === '[' && s[i]  === ']')
        ) {
            str = str.slice(0, -1);
        } else {
            str = str + s[i];
        }
    }
    
    if (str === "") return true;
    
    return false;
    
};