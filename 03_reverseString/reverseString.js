const reverseString = function(word) {

    let length = word.length;
    let splitWordArray = [];
    let inversedWordArray = [];  
    splitWordArray = word.split("");

    for (let index = 0; index < length ; index++) {
        inversedWordArray.push(splitWordArray.slice(-1));
        splitWordArray.pop(-1);
    }
    inversedWordArray = inversedWordArray.join("");
    return inversedWordArray;

};

// Do not edit below this line
module.exports = reverseString;
