const palindromes = function (word) {
    const working = word.toLowerCase();
    let newWord = ""

    for (let i =0; i<working.length; i++) {
        if(isValid(working[i])) {
            newWord += working[i];
        }
    }

    let reversed = ""

    for(let l=newWord.length-1; l>=0; l--) {
        reversed += newWord[l]
    }

    return newWord === reversed

    

};


const isValid = (char) => {
    if(!isNaN(parseInt(char))) {
        return true
    } else {
        return char.toLowerCase() !== char.toUpperCase();
    }   
}

// Do not edit below this line
module.exports = palindromes;
