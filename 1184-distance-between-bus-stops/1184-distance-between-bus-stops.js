/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
var distanceBetweenBusStops = function(distance, start, destination) {
    let from = 0;
    let to = 0;
    let left = 0;
    let right = 0;
    
    if (start < destination) {
        from = start;
        to = destination
    } else {
        from = destination;
        to = start;
    }
    
    for (let i = from; i < to; i++) {
        left = left + distance[i];
    }
    
    for (let j = 0; j < distance.length; j++) {
        right = right + distance[j];
    }
    
    right = right - left;
    
    if (right < left) {
        return right;
    } else {
        return left;
    }
    
    
};