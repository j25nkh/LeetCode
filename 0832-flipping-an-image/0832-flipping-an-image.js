/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
    let tempArr;
    for (let i = 0; i < image.length; i++) {
 
        tempArr = [];
        
        for (let j = image[i].length - 1; j >= 0; j--) {
            if (image[i][j] === 1) {
                tempArr.push(0);    
            } else {
                tempArr.push(1);
            }
        }
        
        image[i] = [...tempArr];
        
    }
    
    return image;
};