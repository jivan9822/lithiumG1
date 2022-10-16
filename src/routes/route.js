const express = require("express");
const router = express.Router(); ///test-you
//importing a custom module
const xyz = require("../logger");
const { loggers } = require("../logger/logger");
const { printDateClosure } = require("../util/helper");
const formater = require("../validator/formatter");
//importing external package
const underscore = require("underscore");
// importing Welcome function from logger/logger.js

router.get("/test-me", function (req, res) {
  const sum = loggers.addNum(10, 20);
  console.log(sum);
  const destArr = loggers.destruct([
    [1, 2],
    [2, 3],
    [4, 5],
  ]);
  console.log(destArr);
  //Calling the components of a different custom module
  console.log("Calling my function ", xyz.myFunction());
  //Trying to use an external package called underscore
  console.log("The value of the constant is ", xyz.myUrl);
  let myArray = ["Akash", "Pritesh", "Sabiha"];
  let result = underscore.first(myArray);
  console.log("The result of underscores examples api is : ", result);

  // --------- Upto This Old Code--------

  // ================Problem 1==================================
  console.log(
    "=========================Problem-1 Solution========================="
  );

  // Uding bind method
  console.log(
    "Calling Welcome Function",
    loggers.Welcome.bind({ name: "Manju" })()
  );

  // Normal calling
  console.log("Calling Welcome Function", loggers.Welcome());
  // ================Problem 2==================================
  console.log(
    "=========================Problem-2 Solution========================="
  );

  // heplper.printDate();
  // heplper.printMonth();
  // heplper.getBatchInfo();

  // using Closures
  const date = printDateClosure();
  console.log(date.getDate());
  console.log(date.getMonth());
  console.log(date.getBatchInfo());

  // ================Problem 3==================================

  console.log(
    "=========================Problem-3 Solution========================="
  );

  let str = "  Jivan Rajpal Toshniwal   ";
  str = formater.transform(str, formater.trim);
  console.log(str);
  console.log(formater.transform(str, formater.changeToUpperCase));
  console.log(formater.transform(str, formater.changetoLowerCase));
  // str = formater.trim(str);
  // console.log(str);
  // console.log(formater.changeToUpperCase(str));
  // console.log(formater.changetoLowerCase(str));

  // ================Problem 4==================================

  console.log(
    "=========================Problem-4 Solution========================="
  );

  const months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JULY",
    "AUG",
    "SEPT",
    "OCT",
    "NOV",
    "DEC",
  ];
  const tempArr = [0, 3, 6, 9];
  const chunkArr = tempArr.map((each) => {
    return months.slice(each, each + 3);
  });
  chunkArr.forEach((each) => {
    console.log(each);
  });

  const _ = require("lodash");

  let x = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

  let newArray = _.tail(x);

  for (let i = 0; i < newArray.length; ++i) {
    console.log(newArray[i]);
  }

  const unionArr = [
    [1, 2, 3, 4],
    [3, 5, 1, 7],
    ["Jivan", "Vishvas", 98, 4],
    ["a", "b", "Aakash", 7],
    ["Jivan", "Sandip", "Joy"],
  ];

  const newUnionarr = _.union(...unionArr);
  console.log(newUnionarr);
  const formPairArr = [
    ["horror", "The Shining"],
    ["drama", "Titanic"],
    ["thriller", "Shutter Island"],
    ["fantasy", "Pans Labyrinth"],
  ];
  const ObjPairs = _.fromPairs(formPairArr);
  console.log(ObjPairs);

  res.send("My first ever api!");

  //To be tried what happens if we send multiple response
  //res.send('My second api!')
});

module.exports = router;
