/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x > 2) {
        for (i = 0; i < x; i++) {
            if (i * i > x) {
                return i - 1;
            }
        }
    } else if (x == 0) {
        return 0;
    } else {
        return 1;
    }
}