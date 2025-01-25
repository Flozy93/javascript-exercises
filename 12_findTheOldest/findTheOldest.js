const people = [
  {
    name: "Carly",
    yearOfBirth: 1066,
  },
  {
    name: "Michael",
    yearOfDeath: 1500,
  },

  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
];

const findTheOldest = function (array) {
  const currentYear = new Date().getFullYear();

  return array
    .filter((item) => item.yearOfBirth)
    .filter((item) => item.yearOfDeath)
    .reduce((oldest, person) => {
      // Step 2
      const personAge =
        (person.yearOfDeath || currentYear) - person.yearOfBirth; // Step 3
      const oldestAge =
        (oldest.yearOfDeath || currentYear) - oldest.yearOfBirth; // Step 4
      return personAge > oldestAge ? person : oldest; // Step 5
    });
};

// Do not edit below this line
module.exports = findTheOldest;
