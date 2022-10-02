/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s = s.trim()
    for (i = 0; i < s.length; i++) {
        if (s.charAt(s.length - i) == " " ) {
            return i - 1;
        } 
    }
    return s.length;
};
