/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const tCopy = t.split("").sort().join("");
    const sCopy = s.split("").sort().join("");
    
    if (sCopy === tCopy) {
        return true;
    } 
    
    return false;
};
