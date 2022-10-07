/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    var n = 0;
    var sChecker = "";
    var sCheck = [];

    var m = 0;
    var tChecker = "";
    var tCheck = [];

    for (i = 0; i < s.length; i++) {
        if (sCheck.includes(s.charAt(i)) == false) {
            n = n + 1;
            sCheck.push(s.charAt(i));
            sChecker = sChecker + n.toString()
        } else {
            sChecker = sChecker + (sCheck.indexOf(s.charAt(i)) + 1).toString();
        }
    }

    for (j = 0; j < t.length; j++) {
        if (tCheck.includes(t.charAt(j)) == false) {
            m = m + 1;
            tCheck.push(t.charAt(j));
            tChecker = tChecker + m.toString()
        } else {
            tChecker = tChecker + (tCheck.indexOf(t.charAt(j)) + 1).toString();
        }
    }

    if (sChecker == tChecker) {
        return true;
    } else {
        return false;
    }
};