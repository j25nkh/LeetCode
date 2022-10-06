/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    var output = [];
    for (i = 1; i < n + 1; i++) {
        if (i % 3 == 0) {
            if (i % 5 == 0) {
                output.push("FizzBuzz");
            } else {
                output.push("Fizz");
            }
        } else if (i % 5 == 0) {
            output.push("Buzz");
        } else {
             output.push(i.toString());
        }
        
    }
    return output;
};