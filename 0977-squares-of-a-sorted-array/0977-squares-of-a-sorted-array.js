/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let sqArr = [];
    
    for (let i = 0; i < nums.length; i++) {
        sqArr.push(nums[i] * nums[i]);
    }
    
    return sqArr.sort((a,b) => a - b);
};