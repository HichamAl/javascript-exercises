const sumAll = function(firstNumber, secondNumber) {
    if (firstNumber < 0 || secondNumber < 0){
        return "ERROR";
    } else if (Number.isInteger(firstNumber) == false || Number.isInteger(secondNumber) == false){
        return "ERROR";
    }

    if (firstNumber > secondNumber){
        lowerNumber = secondNumber;
        higherNumber = firstNumber;
    } else if (secondNumber > firstNumber) {
        lowerNumber = firstNumber;
        higherNumber = secondNumber;
    } 

    const numbersInBetween = [];

    for (let i = lowerNumber + 1; i < higherNumber; i++){
        numbersInBetween.push(i);
    }
    let sum = lowerNumber + higherNumber 
    numbersInBetween.forEach(element => {
        sum += element
    })

    return sum

};

// Do not edit below this line
module.exports = sumAll;
