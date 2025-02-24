const add = function(number1, number2) {
	return number1+number2;
};

const subtract = function(number1, number2) {
	return number1-number2;
};

const sum = function(array) {
  // reduce for function where you 
	const sum = array.reduce((totalSum, arraynumber) => totalSum + arraynumber, 0);
  return sum
};

const multiply = function(array) {
  // reduce function again for multiplying numbers in array iwth eachtother

  // initial value is the first value in array...
  const result = array.reduce((total, arrayNumber) => total * arrayNumber)
  return result

};

const power = function(number, powernumber) {
  const result = Math.pow(number, powernumber);
  return result;
};

const factorial = function(number) {
  let product = 1;
  for (let i = number; i > 0; i--) {
    product *= i;
  }
  return product;

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
