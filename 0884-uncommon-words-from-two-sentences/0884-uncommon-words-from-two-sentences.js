/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
    const arr = [...s1.split(' '), ...s2.split(' ')];
    const obj = {};
    const result = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (!obj[arr[i]]) {
            obj[arr[i]] = 1;
        } else {
            obj[arr[i]] = obj[arr[i]] + 1;
        };
    }
    
    for (const key in obj) {
        if (obj[key] === 1) {
            result.push(key);
        }
    }
    
    return result;
};