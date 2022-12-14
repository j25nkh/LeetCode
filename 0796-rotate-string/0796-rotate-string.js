/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    let charat = 0;
    
    function search(s, goal) {
        let index = s.indexOf(goal.charAt(0), charat);
        
        if (index === -1) {
            return false;
        }

        if (s.slice(index, ) + s.slice(0, index) === goal) {
            return true;
        }
    
        charat = index + 1;
        return search(s, goal);
    }
    
    return search(s, goal);
};