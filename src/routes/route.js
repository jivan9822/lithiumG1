const express = require("express");
const router = express.Router();

const authorController = require("../controllers/authorController");
const publisherCont = require("../controllers/publisherControler");
const bookController = require("../controllers/bookController");

router.get("/test-me", function (req, res) {
  res.send("My first ever api!");
});
// Prob 1 author creation
router.post("/createAuthor", authorController.createAuthor);

router.post("/createPublisher", publisherCont.createPublisher);

// router.get("/getAuthorsData", authorController.getAuthorsData)

router.post("/createBook", bookController.createBook);

router.get("/getBooksData", bookController.getBooksData)

router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)

module.exports = router;
