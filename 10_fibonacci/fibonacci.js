const fibonacci = function(num) {

    let first_check = parseInt(num)

    if(first_check < 0) {
        return "OOPS"
    }

    if(first_check === 1 || first_check === 2) {
        return 1
    }

    let rounds = parseInt(num) - 1;
    
    let prev1 = 0;
    let prev = 1;
    let value = 0;


    for (let i = 0; i<rounds; i++) {
        value = prev1 + prev
        prev1 = prev
        prev = value
    }

    return value

};

// Do not edit below this line
module.exports = fibonacci;
