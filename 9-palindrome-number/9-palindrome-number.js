/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x > 0) {
        var stringX = String(x);
        var StringY = "";
        for (i = 0; i < stringX.length; i++) {
          StringY = StringY + stringX.charAt(stringX.length - 1 - i);
        }
      
        if (Number(StringY) == x) {
            return true;
        } else {
            return false;
        }
    } else if (x == 0) {
        return true;
    } else {
        return false;
    }
};