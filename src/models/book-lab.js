const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      unique: true,
      require: true,
    },
    author: {
      type: String,
      require: true,
    },
    category: String,
    publishIn: String,
    moreCollection: [String],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Book", bookSchema);
