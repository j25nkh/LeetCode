/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const counts = {};

    for (const num of nums) {
        counts[num] = counts[num] ? counts[num] + 1 : 1;
    }
    
    let arr = Object.values(counts);
    let max = Math.max(...arr);

    for (const key in counts) {
        if (counts[key] === max) {
            return key;
        }
    }
    
}