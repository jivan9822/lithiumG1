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

// 4. Write a GET api that fetches all the books along with their author details (you have to populate for this) as well the publisher details (you have to populate for this)
const prob3b = require("../controllers/bookController");

// Edit: New problem (5)
// 5. Create at least 4 publishers (Penguin, Bloomsbury, Saraswati House, HarperCollins). Create at least 6 authors with ratings 2, 3, 3.5, 4, 4.5 and 5. Create around 10 books with these publishers and authors.
// Create a new PUT api /books and perform the following two operations
// //  a) Add a new boolean attribute in the book schema called isHardCover with a default false value. For the books published by 'Penguin' and 'HarperCollins', update this key to true.
//  b) For the books written by authors having a rating greater than 3.5/ 4.6, update the books price by 10 (For eg if old price for such a book is 50, new will be 60)

// {
//     "data": [
//         {
//             "authorName": "Leanne Graham",
//             "rating": 4.5
//         },
//         {
//             "authorName": "Ervin Howell",
//             "rating": 4.6
//         },
//         {
//             "authorName": "Clementine Bauch",
//             "rating": 4.5
//         },
//         {
//             "authorName": "Patricia Lebsack",
//             "rating": 4.8
//         },
//         {
//             "authorName": "Chelsey Dietrich",
//             "rating": 5
//         },
//         {
//             "authorName": "Mrs. Dennis Schulist",
//             "rating": 4.5
//         },
//         {
//             "authorName": "Kurtis Weissnat",
//             "rating": 4.2
//         },
//         {
//             "authorName": "Nicholas Runolfsdottir V",
//             "rating": 4.5
//         },
//         {
//             "authorName": "Glenna Reichert",
//             "rating": 4.8
//         },
//         {
//             "authorName": "Clementina DuBuque",
//             "rating": 4.5
//         }
//     ]
// }

