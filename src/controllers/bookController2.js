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
    found.map((each, index) => {
      each.title = each.title.toLowerCase();
      each.author = each.author.toLowerCase();
      each.country = each.country.toLowerCase();
      each.language = each.language.toLowerCase();
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
  });
};
// updateDate();

const bookQuery = async (req, res) => {
  const name = req.query;
  const key = Object.keys(req.query)[0];
  let sendData = "Received";

  // 1) bookList : gives all the books- their bookName and authorName only

  if (name[key] === "bookList") {
    sendData = await bookStore
      .find()
      .select({ title: 1, author: 1, _id: 0, price: 1 });
  }

  // 2) getBooksInYear: takes year as input in post request and gives list of all books published that year
  if (key === "year") {
    sendData = await bookStore.find({ year: name[key] });
  }

  // 3) by Book title
  if (key === "bookName") {
    const search = name[key].toLowerCase();

    const newData = await bookStore.find({ title: new RegExp("^" + search) });
    sendData = newData;
  }

  // 4) by Book author
  if (key === "author") {
    const search = name[key].toLowerCase();

    const newData = await bookStore.find({ author: new RegExp("^" + search) });
    sendData = newData;
  }

  // 5) by country
  if (key === "country") {
    const search = name[key].toLowerCase();

    const newData = await bookStore.find({
      country: new RegExp("^" + search),
    });
    sendData = newData;
  }

  // 6) Search in range
  if (key === "price") {
    const search = name[key];
    const newData = await bookStore.find();
    const newArr = newData.filter((each) => {
      return each.price.Indian === search;
    });
    sendData = newArr;
  }

  // 7) getRandomBooks - returns books that are available in stock or have more than 500 pages

  if (key === "pages") {
    const search = name[key];
    sendData = await bookStore.find({ pages: { $lt: search } });
  }
  res.send(sendData);
};

module.exports = {
  addBook2,
  bookQuery,
};
