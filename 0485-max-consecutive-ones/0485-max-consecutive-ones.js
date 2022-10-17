/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let count = 0;
    let countStore = [];
    for (i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            count = count + 1;
        } else {
            countStore.push(count);
            count = 0;
        }
    }
    countStore.push(count);
    return countStore.reduce((a, b) => Math.max(a, b), -Infinity);
};