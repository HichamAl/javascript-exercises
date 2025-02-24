const reverseString = function(string) {
    let splitString = string.split(""); // into array
    splitString = splitString.reverse(); // reverse array
    splitString = splitString.join(""); // join the letters together without comma's
    return splitString
};

// Do not edit below this line
module.exports = reverseString;
