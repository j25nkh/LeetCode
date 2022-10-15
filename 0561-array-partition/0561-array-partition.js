/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    let minSum = 0;
    nums.sort((a, b) => a - b);
    
    for (i = 0; i < nums.length; i = i + 2) {
        minSum = minSum + Math.min(nums[i], nums[i + 1]);
    }

    return minSum
};