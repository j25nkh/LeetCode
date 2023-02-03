/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */


var twoSum = function(nums, target) {
//     if (nums.length === 2) return [0, 1];
    
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[j] === target - nums[i]) return [i, j];
//         }
//     }
    
//     const obj = {};
    
//     for (let i = 0; i < nums.length; i++) {
//         if ((target - nums[i]) in obj) return [obj[target - nums[i]], i];
        
//         obj[nums[i]] = i;
//     }
    
    
    var dict= {};
    
    for(var i = 0; i<nums.length; i++) {
        var inp = nums[i];
        var diff = target-inp;
        
        if(diff in dict) return [dict[diff], i];

        dict[inp] = i;
    }

    return null;
};  

