/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function(s) {
    
    const alphabet = [, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let counter = s.length - 1;
    let result = '';
    
    while (counter > -1) {
        if (s.charAt(counter) === '#') {
            result = alphabet[Number(s.charAt(counter - 2) + s.charAt(counter - 1))] + result;
            counter = counter - 3;
        } else {
            result = alphabet[(Number(s.charAt(counter)))] + result;
            counter--;
        }
    }
    
    return result;
};