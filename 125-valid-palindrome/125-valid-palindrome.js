/**
 * @param {string} s
 * @return {boolean}
 */

var isPalindrome = function(s) {
    s = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
    var sB = "";
    if (s == "") {
        return true;
    } else {
        for (i = 0; i < s.length + 1; i++)  {
            sB = sB + (s.charAt(s.length - i));
        }
        if (s == sB) {
            return true;
        } else {
            return false;
        }
    }
}
      
        
        
        
        

