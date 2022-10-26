const bookStore = require("../models/bookModel2");

// Added from Postman using ready api

// createBook : to create a new entry..use this api to create 11+ entries in your collection
const addBook2 = async (req, res) => {
  const bookCreate = await bookStore.create(req.body);
  res.send(bookCreate);
};

// Updated some field price, stockAvailable and tags 
const price = () => Math.round(Math.random() * 1000);

const updateDate = (req, res) => {
  bookStore.find({}, (err, found) => {
    found.map((each,index) => {
      const temp = price();
      each.price = {
        Indian: `${temp}INR`,
        European: `${(temp / 82).toFixed(2)}EURO`,
      };
      if (index % 7 === 0) {
        each.stockAvilable = false;
      } else {
        each.stockAvilable = true;
      }
      each.tags.push("No Tag Avaliable");
      each.save();
    });
    console.log(found);
  });
};
// updateDate();

// All Queries

// 1) bookList : gives all the books- their bookName and authorName only
// getBooksInYear: takes year as input in post request and gives list of all books published that year
// getParticularBooks:- (this is a good one, make sincere effort to solve this) take any input and use it as a condition to fetch books that satisfy that condition
// e.g if body had { name: “hi”} then you would fetch the books with this name
// if body had { year: 2020} then you would fetch the books in this year
// hence the condition will differ based on what you input in the request body
// getXINRBooks- request to return all books who have an Indian price tag of “100INR” or “200INR” or “500INR”
// getRandomBooks - returns books that are available in stock or have more than 500 pages



module.exports.addBook2 = addBook2;
