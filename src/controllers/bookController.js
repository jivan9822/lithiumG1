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
    let books = await bookModel.find().populate("publisher");
    //.select({ "publisher.publisherName": 1, _id: 0, isHardCover: 1 });
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

exports.getBooksWithDetails = async function (req, res) {
  try {
    const request = req.query.name;
    let specificBook = await bookModel.find().populate(request);
    res.status(200).json({
      status: "succuss",
      result: `${specificBook.length} Book found in dataBase!`,
      data: specificBook,
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error,
    });
  }
};

// Problem 5a  start
exports.updateSchemaField = async (req, res) => {
  try {
    let count = 0;
    const toUpdate = req.body.isHardCover; // { true }
    const Publisher = req.query.publisherName; // [ 'Penguin', 'Roli Books' ]
    const UpdatedData = await bookModel
      .find()
      .populate("publisher")
      .then((data) => {
        data.forEach((each) => {
          if (
            Publisher.includes(each.publisher.publisherName) &&
            each.isHardCover != toUpdate
          ) {
            each.isHardCover = toUpdate;
            each.save();
            count++;
          }
        });
      });
    res.status(200).json({
      status: "success",
      result: `${count} entries are modified`,
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error,
    });
  }
};

exports.UpdatePrice = async (req, res) => {
  try {
    let count = 0;
    const BookData = await bookModel
      .find()
      .populate("authorName")
      .then((data) => {
        data.forEach((each) => {
          if (each.authorName.rating > req.query.rating) {
            count++;
            console.log(
              `Author Rating is ${each.authorName.rating} before update price is: `,
              each.price
            );
            each.price += +req.query.price;
            console.log(
              `Author Rating is ${each.authorName.rating} after update price is: `,
              each.price
            );
            each.save();
          }
        });
      });
    res.status(200).json({
      status: "success",
      message: `${count} Book price is updated`,
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error,
    });
  }
};

module.exports.createBook = createBook;
module.exports.getBooksData = getBooksData;
