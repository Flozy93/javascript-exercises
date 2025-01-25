const leapYears = function(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return true; // Divisible by 400 (leap year)
            }
            return false; // Divisible by 100 but not 400 (not a leap year)
        }
        return true; // Divisible by 4 but not 100 (leap year)
    }
    return false; // Not divisible by 4 (not a leap year)
};

// Do not edit below this line
module.exports = leapYears;
