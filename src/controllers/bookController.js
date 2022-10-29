const authorModel = require("../models/authorModel");
const publisherModel = require("../models/publisherModel");
const bookModel = require("../models/bookModel");

// Problem 3 create books
const createBook = async (req, res) => {
  // Problem 3 a, b, c, d ==>  The authorId is present in the request body. If absent send an error message that this detail is required
  // If present, make sure the authorId is a valid ObjectId in the author collection. If not then send an error message that the author is not present.
  // The publisherId is present in the request body. If absent send an error message that this detail is required
  // If present, make sure the publisherId is a valid ObjectId in the publisher collection. If not then send an error message that the publisher is not present.

  let book = req.body;
  const { authorName, publisher } = book;
  const author = await authorModel.findById(authorName);
  const publis = await publisherModel.findById(publisher);
  if (author && publis) {
    try {
      let bookCreated = await bookModel.create(book);
      res.status(200).json({
        status: "succuss",
        result: `${
          bookCreated.length ? bookCreated.length : 1
        } book data added to data base`,
        data: {
          bookCreated,
        },
      });
    } catch (error) {
      res.status(404).json({
        statush: "fail",
        message: error,
      });
    }
  } else {
    res.status(404).json({
      statush: "fail! Id Mismatch",
      message: "authorId or Publisher Id not match With the data base ",
    });
  }
};

// End of problem 3

const getBooksData = async function (req, res) {
  try {
    let books = await bookModel.find();
    res.status(200).json({
      status: "succuss",
      result: `${books.length} books found in data base`,
      data: books,
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error,
    });
  }
};

// 4. Write a GET api that fetches all the books along with their author details (you have to populate for this) as well the publisher details (you have to populate for this)

const getBooksWithAuthorDetails = async function (req, res) {
  let specificBook = await bookModel.find().populate("Author");
  res.send({ data: specificBook });
};

module.exports.createBook = createBook;
module.exports.getBooksData = getBooksData;
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails;
