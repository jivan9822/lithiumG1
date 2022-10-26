// Assignment :
// Create a books collection in your DB ( using bookModel with following fields)- bookName( mandatory field), price containing Indian and european price, year ( should be 2021 if no year is provided) , tags array, authorName, totalPages , stockAvailable ( true false)

const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    author: String,
    country: String,
    imageLink: String,
    language: String,
    link: String,
    pages: Number,
    title: {
      type: String,
      require: true,
    },
    price: {
      Indian: String,
      European: String,
    },
    year: {
      type: Number,
      default: 2021,
    },
    tags: [String],
      stockAvilable: Boolean,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Book2", bookSchema);