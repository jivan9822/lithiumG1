const mongoose = require("mongoose");

const newPublisher = mongoose.Schema({
  publisherName: {
    type: String,
    required: [true, "Publisher must have a name!"],
    unique: [true, "Publisher name already exits"],
  },
  headQuarter: String,
});

module.exports = mongoose.model("Publisher", newPublisher);
