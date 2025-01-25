const removeFromArray = function(array, ...arguments) {
    for (let argument of arguments) {
        for(let i = array.length - 1; i >= 0; i--) {
            if(array[i] === argument) {
               array.splice(i, 1);
            }
        }
    }
    
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
