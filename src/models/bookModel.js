const mongoose = require("mongoose");
const authorModel = require("./authorModel");
const ObjectId = mongoose.Schema.Types.ObjectId;

const newBook = mongoose.Schema(
  {
    bookName: {
      type: String,
      required: [true, "Book name shoud be there!"],
      unique: true,
    },
    // Problem 3aa
    authorName: {
      // "From Author Collection",
      type: ObjectId,
      ref: "Author",
      required: [true, "Author ID must be there!"],
    },
    pageCount: Number,
    price: Number,
    rating: Number,
    publisher: {
      // "From Publisher Collection",
      type: ObjectId,
      ref: "Publisher",
      required: [true, "Publisher ID must be there!"],
    },
    isHardCover: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("NewBook", newBook);
