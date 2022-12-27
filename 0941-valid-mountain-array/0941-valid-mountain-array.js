/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    let increased = 0;
    let decreased = 0;
    let peak;
    
    if (arr.length < 3) {
        return false;
    }
    
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            peak = i;
            break;
        }
    }
    
    if (arr[1] <= arr[0] || !peak) return false;
    
    for (let j = 0; j < peak - 1; j++) {
        if (arr[j] >= arr[j + 1]) {
            return false;
        }
    }
    
    for (let k = peak + 1; k < arr.length - 1; k++) {
        if (arr[k] <= arr[k + 1]) {
            return false;
        }
    }
    
    return true;
};