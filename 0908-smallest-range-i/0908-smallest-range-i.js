/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestRangeI = function(nums, k) {
    nums.sort((a, b) => a - b);
    
    if (nums[nums.length - 1] - nums[0] <= k*2) {
        return 0;
    } 
    
    return nums[nums.length - 1] - nums[0] - k*2;
};