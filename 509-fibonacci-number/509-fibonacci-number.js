/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    var Fib = [0, 1];
    
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        for (i = 2; i < n + 1; i++) {
            Fib.push(Fib[i - 2] + Fib[i - 1]);
        }
        return Fib[Fib.length - 1];
    }
    

};