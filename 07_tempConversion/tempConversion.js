const convertToCelsius = function(temperature) {
  let tempInCelsius = (temperature - 32) * 5/9 ;
  tempInCelsius = Math.round(tempInCelsius * 10) / 10;
  return tempInCelsius;
};

const convertToFahrenheit = function(temperature) {
  let tempInFarenheit = (temperature * 5/9 + 32) ;
  tempInFarenheit = Math.round(tempInFarenheit * 10) / 10;
  return tempInFarenheit
};
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
