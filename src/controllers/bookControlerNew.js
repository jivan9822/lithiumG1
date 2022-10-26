const BookModel = require("../models/bookModelnew");

const addBook = async (req, res) => {
  const data = req.body;
  const addedBooks = await BookModel.Book.create(data);
  res.send(addedBooks);
};
const addAuthor = async (req, res) => {
  const data = req.body;
  const authodData = await BookModel.Author.create(data);
  res.send(authodData);
};

// List out the books written by "Chetan Bhagat" ( this will need 2 DB queries one after another- first query will find the author_id for "Chetan Bhagat”. Then next query will get the list of books with that author_id )

const BookSearch = async (req, res) => {
  const query = req.query.name;
  const id = await BookModel.Author.findOne({ name: query });
  const search_id = id.author_id;
  const Books = await BookModel.Book.find({ author_id: search_id });
  res.send(Books);
};

// Find author of book and update price

const findAndUpdate = async (req, res) => {
  const BookPrice = 100;
  const bookName = req.query.name;
  const dataObj = await BookModel.Book.findOne({ name: bookName });
  const authId = dataObj.author_id;
  const authorName = await BookModel.Author.findOne({ author_id: authId });
  const UpdatePrice = await BookModel.Book.updateMany(
    { author_id: authId },
    { $set: { price: BookPrice } },
    { new: true }
  );
  res.send({ AuthorName: authorName.author_name, UpdatedeArr: UpdatePrice });
};

// Find Books In range

const findBooks = async (req, res) => {
  const Books = await BookModel.Book.find({
    price: { $gte: 50 },
    price: { $lte: 100 },
  });
  const authorArr = await BookModel.Author.find();
  const Obj = {};
  Books.map((each) => {
    const id = each.author_id;
    authorArr.map((ele) => {
      if (id === ele.author_id) {
        Obj[`BookName is: ${each.name}`] = `Author is: ${ele.author_name}`;
      }
    });
  });
  res.send({ "List Of Book Cost In 50 to 100 are: ": Obj });
};

module.exports = {
  addAuthor,
  addBook,
  BookSearch,
  findAndUpdate,
  findBooks,
};
