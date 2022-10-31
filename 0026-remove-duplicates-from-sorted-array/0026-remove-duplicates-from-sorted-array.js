/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let k = 0;

    for (i = 0; i < nums.length - 1; i++) {
        if (nums[i] === nums[i + 1]) {
            nums[i] = "_";
            k += 1;
        }
    }
    nums.sort();
    nums.sort((a, b) => a - b);
    
    return k = nums.length - k;
};