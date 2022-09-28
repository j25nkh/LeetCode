/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  var romanSum = 0;
  for (i = 0; i < s.length; i++) {
      if (s.charAt(i) == "I") {
        if (s.charAt(i + 1) == "V" || s.charAt(i + 1) == "X") {
          romanSum = romanSum - 1;  
        } else {
        romanSum = romanSum + 1;
        }
      } else if (s.charAt(i) == "V") {
        romanSum = romanSum + 5;
      } else if (s.charAt(i) == "X") {
        if (s.charAt(i + 1) == "L" || s.charAt(i + 1) == "C") {
          romanSum = romanSum - 10;  
        } else {
        romanSum = romanSum + 10;
        }
      } else if (s.charAt(i) == "L") {
        romanSum = romanSum + 50;
      } else if (s.charAt(i) == "C") {
        if (s.charAt(i + 1) == "D" || s.charAt(i + 1) == "M") {
          romanSum = romanSum - 100;  
        } else {
        romanSum = romanSum + 100;
        }
      } else if (s.charAt(i) == "D") {
        romanSum = romanSum + 500;
      } else if (s.charAt(i) == "M") {
        romanSum = romanSum + 1000;
      }
  }
  return romanSum;
};