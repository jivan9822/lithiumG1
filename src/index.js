const express = require("express");
const bodyParser = require("body-parser");
const route = require("./routes/route.js");
// const { default: mongoose } = require("mongoose");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", route);

const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://j_jivan:223521@cluster0.tbpicad.mongodb.net/newFriut"
);

const fruitSchema = {
  name: String,
}

const Fruit = mongoose.model("friut", fruitSchema);
app.listen(process.env.PORT || 3000, function () {
  console.log("Express app running on port " + (process.env.PORT || 3000));
});
