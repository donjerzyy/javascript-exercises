const sumAll = function(num1, num2) {

    if(num1<0 || num2<0 || typeof num1 !== 'number' || typeof num2 !== 'number' 
        ) {
        return 'ERROR'
    }

    let low;
    let high;
    let sum = 0;
    if (num1 === num2) {
        return num1
    } else {
        if(num1<num2) {
            low = num1
            high = num2
        } else {
            high = num1
            low = num2
        }

        while(low<=high) {
            sum += low
            low++ 
        }
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
