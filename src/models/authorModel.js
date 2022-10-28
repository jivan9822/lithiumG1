const mongoose = require("mongoose");
const newAuthor = mongoose.Schema(
  {
    authorName: {
      type: String,
      required: [true, "Author name should be there"],
      unique: [true, "Author name already exits"],
    },
    age: Number,
    email: String,
    address: {
      suite: String,
      street: String,
      city: String,
      zipcode: String,
    },
    phone: String,
    website: String,
    rating: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Author", newAuthor);
