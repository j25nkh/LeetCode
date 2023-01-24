/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const obj = {};
    
    for (let i = 0; i < arr.length; i++) {
        if (!obj[arr[i]]) {
            obj[arr[i]] = 1;
        } else {
            obj[arr[i]]++;
        }
    }
    
    const newArray = Object.values(obj).sort((a, b) => a - b);
    
    for (let j = 0; j < newArray.length - 1; j++) {
        if (newArray[j] === newArray[j + 1]) return false;
    }
    
    return true;
};