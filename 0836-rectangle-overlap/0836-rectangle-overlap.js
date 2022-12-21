/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
var isRectangleOverlap = function(rec1, rec2) {
    let Hmin = rec1[0];
    let Hmax = rec1[2];
    let Vmin = rec1[1];
    let Vmax = rec1[3];
    
    let H1 = rec2[0];
    let H2 = rec2[2];
    let V1 = rec2[1];
    let V2 = rec2[3];
    
    if (((H1 > Hmin && H1 < Hmax) || (H2 > Hmin && H1 < Hmax)) && ((V1 > Vmin && V1 < Vmax) || (V2 > Vmin && V1 < Vmax))) {
        return true;
    }
    
    return false;
};