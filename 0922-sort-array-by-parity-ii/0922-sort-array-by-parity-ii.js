/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(nums) {
    const evens = [];
    const odds = [];
    const result = [];
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            evens.push(nums[i]);
        } else {
            odds.push(nums[i]);
        }
    }
    
    for (let j = 0; j < evens.length; j++) {
        result.push(evens[j]);
        result.push(odds[j]);
    }
    
    return result;
};