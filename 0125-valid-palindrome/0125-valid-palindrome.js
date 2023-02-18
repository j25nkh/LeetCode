/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let string = s.toLowerCase().replace(/[^a-z0-9]/g, "");
    return string.split('').slice(0, Math.floor(string.length / 2)).every((letter, index) => letter === string[string.length - 1 - index])
};