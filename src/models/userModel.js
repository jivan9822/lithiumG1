const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your name"],
    lowercase: true,
    unique: [true, "User is already present"],
  },
  balance: {
    type: Number,
    default: 100,
  },
  address: String,
  age: Number,
  gender: {
    type: String,
    enum: ["male", "female", "others"],
  },
  isFreeAppUser: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("User", userSchema);
