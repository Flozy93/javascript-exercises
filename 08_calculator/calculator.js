const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  return array.reduce((acc, current) => acc + current);
};

const multiply = function () {
  return array.reduce((acc, current) => acc * current);
};

const power = function (a, b) {
  return Math.pow(a, b);
};

const factorial = function () {
  let res = 1;
  for (let i = 1; i <= n; i++) {
    res *= i;
  }
  return res;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
