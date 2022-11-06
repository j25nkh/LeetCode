/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    nums.sort((a, b) => a - b);
    
    if (nums.length === 1) {
        return false;
    }
    
    for (i = 0; i < nums.length - 1; i++) {
        if (nums[i + 1] - nums[i] === 0) {
            return true;
        }
    }
    
    return false;
};