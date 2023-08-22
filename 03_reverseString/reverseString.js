const reverseString = function(value) {
    let word = ""
    let count = value.length
    for(i=count-1; i>=0; i--) {
        word += value[i]
    }
    return word

};

// Do not edit below this line
module.exports = reverseString;
