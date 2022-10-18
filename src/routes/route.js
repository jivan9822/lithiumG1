const express = require("express");
const abc = require("../introduction/intro");
const router = express.Router();
const intro = require("./introduction/intro");
const intro2 = require("../introduction/intro");
const { fill } = require("lodash");
router.get("/test-me", function (req, res) {
  console.log("My batch is", abc.name);
  abc.printName();
  res.send("My second ever api!");
});

router.get("/students", function (req, res) {
  console.log("The path params in the request are : ", req.params);
  let students = ["Sabiha", "Neha", "Akash"];
  res.send(students);
});

// Example 1 for path params
router.get("/students/:studentName", function (req, res) {
  // ':' denotes that the following part of route is a variable
  // The value of this variable is what we are sending in the request url after /students
  // This value is set in the form of an object inside req.params
  // The object contain key value pairs
  // key is the variable in the route
  // value is whatever dynamic value sent in the request url
  let myParams = req.params;

  // params attribute is fixed in a request object
  // params contains the path parameters object
  console.log("The path params in the request are : ", myParams);
  res.send("The full name is " + myParams.studentName);
});

// Example 2 for path params
router.get("/student-details/:name", function (req, res) {
  let requestParams = req.params;
  console.log("This is the request ", requestParams);
  let studentName = requestParams.name;
  console.log("Name of the student is ", studentName);
  res.send("Dummy response");
});

// assignment/get-api

// Problem 1 Create an API for GET /movies that returns a list of movies. Define an array of movies in your code and return the value in response.
const movies = [
  "Top Gun: Maverick",
  "Doctor Strange in the Multiverse of Madness",
  "Jurassic World Dominion",
  "The Batman",
  "Minions: The Rise of Gru",
  "Thor: Love and Thunder",
  "Sonic the Hedgehog 2",
  "Elvis",
  "Uncharted Sony",
];
const color = [
  "#fcba03",
  "#62fc03",
  "#03fce3",
  "#035efc",
  "#8003fc",
  "#f403fc",
  "#fc034e",
  "#03fc3d",
  "#fceb03",
];
router.get("/movies", (req, res) => {
  res.write(`<div style="color:blue;text-align:center;" >`);
  movies.forEach((each, i) => {
    res.write(`<h1 style="color:${color[i]};" >${each}<h1/>`);
  });
  res.write(`<div/>`);
  res.end();
});

//Problem=2 Create an API GET /movies/:indexNumber (For example GET /movies/1 is a valid request and it should return the movie in your array at index 1). You can define an array of movies again in your api

router.get("/movies/:ind", (req, res) => {
  const i = Number(req.params.ind);
  if (i < movies.length && typeof i === "number") {
    res.write(`<h1 style="color:${color[i]};" >${movies[i]}<h1/>`);
  } else {
    res.send("Not a valid request");
  }
});

//Problem 4== Write another api called GET /films. Instead of an array of strings define an array of movie objects this time. Each movie object should have values - id, name.

const filemsArr = [];
for (let i = 0; i < movies.length; ++i) {
  filemsArr.push({
    id: i + 1,
    Movie: movies[i],
    Color: color[i],
  });
} 

router.get("/films", (req, res) => {
  res.write(`<div style="color:blue;text-align:center;" >`);
  filemsArr.forEach((each) => {
    res.write(
      `<h1 style="color:${each.Color};" >${each.id}--> ${each.Movie}<h1/>`
    );
  });
  res.write(`<div/>`);
  res.end();
});

//Problem 5 == Write api GET /films/:filmId where filmId is the value received in request path params. Use this value to return a movie object with this id. In case there is no such movie present in the array, return a suitable message in the response body.

router.get("/films/:id", (req, res) => {
  const i = Number(req.params.id);
  if (i < movies.length && typeof i === "number") {
    res.write(
      `<h1 style="color:${filemsArr[i].Color};" > id: ${filemsArr[i].id} ==> ${filemsArr[i].Movie}<h1/>`
    );
  } else {
    res.send("No movie exists with this id");
  }
});
module.exports = router;
