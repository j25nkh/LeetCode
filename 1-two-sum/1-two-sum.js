/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {
    for (i = 0; i < nums.length; i++) {
        for (j = 0; j <nums.length; j++) {
            if (j > i) {
                if (nums[i] + nums[j] === target) {
                    var answer = [];
                    answer.push(i);
                    answer.push(j);
                    return answer;
                }
            }
        }
    }
};