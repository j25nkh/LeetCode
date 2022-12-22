/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
    let checkUp = 0;
    let checkDown = 0;
    
    if (nums.length <= 1) {
        return true;
    }
    
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] > nums[i + 1]) {
            checkDown = 1;
        }
        
        if (nums[i] < nums[i + 1]) {
            checkUp = 1;
        }
    }
    
    if (checkUp && checkDown) {
        return false;
    }
    
    return true;
};