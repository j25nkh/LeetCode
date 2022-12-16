/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let vertical = 0;
    let horizontal = 0;
    
    for (let i = 0; i < moves.length; i++) {
        if (moves.charAt(i) === "L") {
            horizontal--;
        }
        
        if (moves.charAt(i) === "R") {
            horizontal++;
        }
    
        if (moves.charAt(i) === "D") {
            vertical--;
        }
        
        if (moves.charAt(i) === "U") {
            vertical++;
        }
    }
    
    if (vertical === 0 && horizontal === 0) {
        return true;
    }
    
    return false;
};