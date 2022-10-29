/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix = "";
    let Candidate = "";
    
    for (i = 0; i < strs[0].length; i++) {
        Candidate = strs[0].charAt(i);
        
        for (j = 1; j < strs.length ; j++) {
            if (strs[j].charAt(i) !== Candidate) {
                return prefix;
            }
        }
        
        prefix = prefix + Candidate;
    }
        
    return prefix;
};