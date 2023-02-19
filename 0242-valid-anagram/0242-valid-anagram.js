/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    
    const ss = {};
    const tt = {};
    
    for (let i = 0; i < s.length; i++) {
        if (!ss[s[i]]) {
            ss[s[i]] = 1;
        } else {
            ss[s[i]]++;
        }
        
        if (!tt[t[i]]) {
            tt[t[i]] = 1;
        } else {
            tt[t[i]]++;
        }
    }
  
  for (const char in ss) {
    if (ss[char] !== tt[char]) {
      return false;
    }
  }
    
  return true;
};
