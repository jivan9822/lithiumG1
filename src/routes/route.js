const express = require("express");
const router = express.Router();

router.get("/students/:name", function (req, res) {
  let studentName = req.params.name;
  console.log(studentName);
  res.send(studentName);
});

router.get("/random", function (req, res) {
  res.send("hi there");
});

router.get("/test-api", function (req, res) {
  res.send("hi FunctionUp");
});

router.get("/test-api-2", function (req, res) {
  res.send("hi FunctionUp. This is another cool API");
});

router.get("/test-api-3", function (req, res) {
  res.send(
    "hi FunctionUp. This is another cool API. And NOw i am bored of creating API's "
  );
});

router.get("/test-api-4", function (req, res) {
  res.send(
    "hi FunctionUp. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s "
  );
});

router.get("/test-api-5", function (req, res) {
  res.send(
    "hi FunctionUp5. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s "
  );
});

router.get("/test-api-6", function (req, res) {
  res.send({ a: 56, b: 45 });
});

router.post("/test-post", function (req, res) {
  res.send([23, 45, 6]);
});

router.post("/test-post-2", function (req, res) {
  res.send({ msg: "hi", status: true });
});

router.post("/test-post-3", function (req, res) {
  res.send({ msg: "hi", status: true });
});

router.post("/test-post-4", function (req, res) {
  let arr = [12, "functionup"];
  let ele = req.body.element;
  arr.push(ele);
  res.send({ msg: arr, status: true });
});

// Write Post Api

const path = require("path");
const fs = require("fs");
let Players = [];
router.get("/addPlayer", (req, res) => {
  console.log(__dirname);
  res.sendFile(path.join(__dirname, "../index.html"));
});
router.post("/addPlayer", (req, res) => {
  req.body.Hobbies = req.body.Hobbies.split(" ");
  fs.readFile("./data/data.json", (err, data) => {
    if (!err) {
      Players = JSON.parse(data);
    } else {
      console.log(err);
    }
    Players.push(req.body);
    fs.writeFile("./data/data.json", JSON.stringify(Players), (err) => {});
  });
  res.redirect("/addPlayer");
});

module.exports = router;
