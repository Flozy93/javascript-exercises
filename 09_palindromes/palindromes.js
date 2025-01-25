const palindromes = function (string) {
  let regex = /[\W_]/g;
  let regularString = string.toLowerCase().replace(regex, "");
  let inversedString = regularString.split("").reverse().join("");
  console.log(inversedString);
  return regularString === inversedString;
};

palindromes("test");

// Do not edit below this line
module.exports = palindromes;
