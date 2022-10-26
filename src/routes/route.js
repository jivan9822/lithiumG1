const express = require("express");
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController = require("../controllers/userController");
const BookController = require("../controllers/bookController");
const bookController2 = require("../controllers/bookController2");

router.get("/test-me", function (req, res) {
  res.send("My first ever api!");
});

router.post("/createUser", UserController.createUser);

router.get("/getUsersData", UserController.getUsersData);

router.post("/createBook", BookController.createBook);

router.get("/getBooksData", BookController.getBooksData);

router.post("/addBook2", bookController2.addBook2);
// bookList
// bookName
// year
// author
// country
// language
router.get("/allQuery", bookController2.bookQuery);

module.exports = router;
