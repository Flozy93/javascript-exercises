const sumAll = function(startNumber, endNumber) {
    let array = [];
    let index = startNumber;
    let sum = 0;

    while (index <= endNumber){
        sum = sum + index;
        index++;
    }

    return sum;

};


// Do not edit below this line
module.exports = sumAll;
