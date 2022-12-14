/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    nums = nums.sort((A, B) => A - B);
    const arr = [];
    
    let dup;
    let mis = nums[nums.length - 1] + 1;
    
    if (nums[0] !== 1) {
        mis = 1;
    }
    
    for (let i = 0; i < nums.length - 1; i++) {
     
        if (nums[i + 1] - nums[i] === 0) {
            dup = nums[i];
        }
        
        if (nums[i + 1] - nums[i] === 2) {
            mis = nums[i] + 1;
        }
    }
    
    return [dup, mis];
};