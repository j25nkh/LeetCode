/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const str = s.toLowerCase();
    let forwardS = "";
    let backwardS = "";
    
    for (let j = 0; j < str.length; j++) {
        if (str[j].match(/^[a-z0-9]*$/)) {
            forwardS = forwardS + str[j];
            backwardS = str[j] + backwardS;
        }
    }

    if (forwardS === backwardS) {
        return true;
    }
    
    return false;
};