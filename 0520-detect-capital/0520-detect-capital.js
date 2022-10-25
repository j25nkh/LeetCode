/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    let wordLow = word.toLowerCase();
    let wordUp = word.toUpperCase();
    let firstCapOnly = wordUp.slice(0, 1) + wordLow.slice(1);
    
    if (word === wordLow || word === wordUp || word === firstCapOnly) {
        return true;
    }
    
    return false;
};