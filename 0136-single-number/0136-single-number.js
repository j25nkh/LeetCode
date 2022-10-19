/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    if (nums.length == 1) {
        return nums[0];
    } else {
        nums.sort((a, b) => a - b);
        for (i = 0; i < nums.length; i = i + 2) {
            if (nums[i] - nums[i + 1] != 0) {
                if (nums[i] - nums[i - 1] === 0) {
                    return nums[i + 1]
                } else {
                    return nums[i];
                }
            }
        }
    }
};