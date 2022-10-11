/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function(s, k) {
  var formatS = s.replaceAll("-", "").toUpperCase();
  var newS = "";
  var firstGroup = formatS.length % k;
  
  for (i = 0; i < formatS.length; i++) {
    if ((i - firstGroup) % k == 0 && i != 0) {
      newS = newS + "-";
    }
    newS = newS + formatS.charAt(i);    
  }
  return newS;
};