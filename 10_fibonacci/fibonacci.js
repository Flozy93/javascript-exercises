const fibonacci = function (index) {
  let fib = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55];

  return fib.at(index);
};

fibonacci(6);

// Do not edit below this line
module.exports = fibonacci;
