/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    let arr = [];
    let longest = 1;
    
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i + 1] > nums[i]) {
            longest++;
        } else {
            arr.push(longest);
            longest = 1;
        }
    }
    
    arr.push(longest);
    return arr.reduce((a, b) => Math.max(a, b), -Infinity);
};