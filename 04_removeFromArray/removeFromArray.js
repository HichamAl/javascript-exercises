const removeFromArray = function(array, ...remainingargs) {
    const newArray = [];

    array.forEach(element => {
        if (!remainingargs.includes(element)){
            newArray.push(element);
        }
        
    });
    return newArray
};

// Do not edit below this line
module.exports = removeFromArray;
