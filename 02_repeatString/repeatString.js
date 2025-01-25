const repeatString = function(text, repeats) {
    let array  = [];
    for (let index = 0; index < repeats; index++) {
    array.push(text);
    }
    array = array.join("");
    return array;
};

// Do not edit below this line
module.exports = repeatString;
