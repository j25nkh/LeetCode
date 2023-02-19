/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    
    const result = {};
    
    
    for (let i = 0; i < s.length; i++) {
        if (!result[s[i]]) {
            result[s[i]] = 1;
        } else {
            result[s[i]]++;
        }
        
        if (!result[t[i]]) {
            result[t[i]] = -1;
        } else {
            result[t[i]]--;
        }
    }
  
  for (const char in result) {
    if (result[char] !== 0) {
      return false;
    }
  }
    
  return true;
};
