/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
var numberOfLines = function(widths, s) {
    let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let sum = 0;
    let lines = 1;
    
    for (let i = 0; i < s.length; i++) {
        if (sum + widths[alphabet.indexOf(s.charAt(i))] <= 100) {
            sum = sum + widths[alphabet.indexOf(s.charAt(i))];
        } else {
            lines++;
            sum = widths[alphabet.indexOf(s.charAt(i))];
        }
    }
    
    return [lines, sum];
};