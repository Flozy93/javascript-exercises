const books = [
  {
    title: "Book",
    author: "Name",
  },
  {
    title: "Book2",
    author: "Name2",
  },
];

const getTheTitles = function (array) {
  return array.map((item) => item.title);
};

getTheTitles(books);
