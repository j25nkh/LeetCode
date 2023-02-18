/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let forwardS = s.toLowerCase().replace(/[^a-zA-Z0-9]+/g, "");

    for (let i = 0; i < forwardS.length; i++) {
        if (forwardS[i] !== forwardS[forwardS.length - 1 - i]) {
            return false;
        }
    }

    return true;
};