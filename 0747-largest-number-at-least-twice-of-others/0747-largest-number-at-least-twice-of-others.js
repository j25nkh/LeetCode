/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    let nums2 = [...nums];
    nums2.sort((a, b) => a - b);
    
    if (nums2[nums2.length - 1] >= 2 * nums2[nums2.length - 2]) {
        return nums.indexOf(nums2[nums2.length - 1]);
    }
    
    return -1;
};
