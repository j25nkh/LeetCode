/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
    if (coordinates.length === 2) return true;
    
    const changeY = coordinates[1][1] - coordinates[0][1];
    const changeX = coordinates[1][0] - coordinates[0][0];
    
    if (changeX === 0) {
        for (let i = 0; i < coordinates.length - 1; i++) {
            if (coordinates[i][0] !== coordinates[i + 1][0]) {
                return false;
            }
        }
        
        return true;
    }
    
    const slope = changeY/changeX;
    const b = coordinates[1][1] - slope*coordinates[1][0];
    
    
    function calculateY (x) {
        const result = slope*x + b;
        return result;
    }

    for (let i = 0; i < coordinates.length; i++) {
        if (calculateY(coordinates[i][0]) !== coordinates[i][1]) {
            return false;
        }
    }
    
    return true;
};