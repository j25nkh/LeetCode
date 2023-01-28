/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
    const result = [];
    let counter = 1;
    
    if (n === 0) return [0];
    
    if (n % 2 === 1) {
        result.push(0); 
    }
    
    while (counter < n) {
        result.push(counter);
        result.push(-1 * counter);

        counter = counter + 2;
    }
        
    return result;
};