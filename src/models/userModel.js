const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
    },
    lastName: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
    },
    mobile: {
      type: String,
      unique: true,
      required: true,
    },
    emailId: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      unique: true,
      required: true,
    },
    gender: {
      type: String,
      enum: ["male", "female", "other"],
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    age: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
