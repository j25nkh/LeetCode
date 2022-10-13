/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
    var poisonTime = 0;
    for (i = 0; i < timeSeries.length - 1; i++) {
        if (timeSeries[i + 1] - timeSeries[i] >= duration) {
            poisonTime = poisonTime + duration;
        } else {
            poisonTime = poisonTime + timeSeries[i + 1] - timeSeries[i];
        }
    }
    poisonTime = poisonTime + duration;
    
    return poisonTime;
    
};