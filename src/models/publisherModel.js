const mongoose = require("mongoose");

const newPublisher = mongoose.Schema({
  publisherName: {
    type: String,
    required: true,
    unique: true,
  },
  headQuarter: String,
});

module.exports = mongoose.model("Publisher", newPublisher);
