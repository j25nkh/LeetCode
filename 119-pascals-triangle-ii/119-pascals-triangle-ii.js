/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    var Result = [];
    var ResultPre = [];
    var ResultPart = [];

    for (i = 0; i < rowIndex + 1; i++) {
        if (i == 0) {
            Result.push([1]);
        } else if (i == 1) {
            Result.push([1, 1]);
        } else {
            ResultPart = [];
            ResultPre = Result[Result.length - 1];
            for (j = 0; j < ResultPre.length - 1; j++) {
                ResultPart.push(ResultPre[j] + ResultPre[j + 1])
            }
            ResultPart.push(1);
            ResultPart.unshift(1);
            Result.push(ResultPart);
        }

    }
    return Result[Result.length - 1];
};