const repeatString = function(text, number) {
    if(number<0) {
        return "ERROR";
    }
    let word = ""
    for(i=0;i<number;i++) {
        word += text 
    }
    return word
};

// Do not edit below this line
module.exports = repeatString;
