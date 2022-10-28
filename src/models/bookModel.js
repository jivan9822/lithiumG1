const mongoose = require("mongoose");
const authorModel = require("./authorModel")
const ObjectId = mongoose.Schema.Types.ObjectId;

const newBook = mongoose.Schema({
  bookName: {
    type: String,
    required: true,
    unique: true,
  },
  authorName: {
    // "From Author Collection",
    author: ObjectId,
    ref: "Author",
  },
  pageCount: Number,
  price: Number,
  rating: Number,
  publisher: {
    // "From Publisher Collection",
    publisher: ObjectId,
    ref: "Publisher",
  },
});

module.exports = mongoose.model("NewBook", newBook);
