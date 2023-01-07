/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    const obj = {};
    const onlyInArr1 = [];
    const result = [];
    
    for (let i = 0; i < arr1.length; i++)   {
        if (arr2.includes(arr1[i])) {
            if (!obj[arr1[i]]) {
               obj[arr1[i]] = 1;
            } else {
                obj[arr1[i]] = obj[arr1[i]] + 1;
            }
        } else {
            onlyInArr1.push(arr1[i]) ;
        }
    }
    
    onlyInArr1.sort((a, b) => a - b);
    
    for (let j = 0; j < arr2.length; j++) {
        for (let k = 0; k < obj[arr2[j]]; k++) {
            result.push(arr2[j]);
        }
    }
    
    for (let k = 0; k < onlyInArr1.length; k++) {
        result.push(onlyInArr1[k]);
    }
    
    return result;
};