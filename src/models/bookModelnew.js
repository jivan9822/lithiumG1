const mongoose = require("mongoose");

const BookSchema3 = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
  },
  author_id: {
    type: Number,
    required: true,
  },
  price: Number,
  ratings: Number,
});

const AuthorSchema3 = new mongoose.Schema({
  author_id: {
    type: Number,
    unique: true,
    required: true,
  },
  author_name: {
    type: String,
    required: true,
  },
  age: Number,
  address: String,
});

module.exports.Book = mongoose.model("Booknew", BookSchema3);
module.exports.Author = mongoose.model("Author", AuthorSchema3);
