/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    var nArray = [];
    var count = 0
    var left = n;
  
    do {
      count = count + 1;
      nArray.push(count);
      left = left - count;
    } while (left > count);
  
    if (left > 0) {
      nArray.push(left);  
    }
  
    if (nArray[nArray.length - 1] != nArray[nArray.length - 2] + 1) {
      nArray.pop();
    }
  
    if (n == 1) {
      return 1;
    } else {
      return nArray.length;
    }
};