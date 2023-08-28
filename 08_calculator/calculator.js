const add = function(a,b) {
	return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(arr) {

  const total = arr.reduce((total, current)=>{
    return total + current;
  },0)

	return total
};

const multiply = function(arr) {
  const total = arr.reduce((total, current)=>{
    return total * current;
  },1)

	return total
};

const power = function(base, pow) {
  return Math.pow(base, pow)
};

const factorial = function(num) {

  if(num === 0) {
    return 1
  } else {

    for(let i = num - 1; i>0 ; i--) {
        num = num * i
    }

    return num
  }

	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
