/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    const heightsCopy = [...heights].sort((a,b) => a - b);
    let result = 0;
    
    for (let i = 0; i < heights.length; i++) {
        if (heights[i] !== heightsCopy[i]) {
            result++;
        }
    }
    
    return result;
};