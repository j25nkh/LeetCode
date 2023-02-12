/**
 * @param {number[]} prices
 * @return {number}
 */
// var maxProfit = function(prices) {
//     let min = prices[0];
//     let maxProfit = 0;
        
//     for (let i = 1; i < prices.length; i++) {
//         if (prices[i] < min) {
//             min = prices[i];
//         } else if (prices[i] - min > maxProfit) {
//             maxProfit = prices[i] - min;
//         }
//     }
    
//     return maxProfit;
// };

var maxProfit = function(prices) {
    let minPrice = Number.MAX_SAFE_INTEGER;
    let maxProfit = 0;
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } else if (prices[i] - minPrice > maxProfit) {
            maxProfit = prices[i] - minPrice;
        }
    }
    return maxProfit;
};