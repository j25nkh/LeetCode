/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */


var twoSum = function(nums, target) {
    const obj = {};
    
    for (let i = 0; i < nums.length; i++) {
        if (target - nums[i] in obj) return [obj[target - nums[i]], i];
        obj[nums[i]] = i;
    }
};  

