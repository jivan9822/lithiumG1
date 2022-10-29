// 1. Write a POST api that creates an author from the details in request body

const prob1a = require("../routes/route");
const prob1b = require("../controllers/authorController");

// 2. Write a POST api that creates a publisher from the details in the request body

const prob2a = require("../routes/route");
const prob2b = require("../controllers/publisherControler");

// 3. Write a POST api that creates a book from the details in the request body. The api takes both the author and publisher from the request body.

const prob3a = require("../routes/route");
const prob3b = require("../controllers/bookController");
// Prob3 a.The authorId is present in the request body. If absent send an error message that this detail is required
const problem3aa = require("../models/bookModel");
