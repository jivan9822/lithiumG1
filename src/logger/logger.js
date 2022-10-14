const _ = require("lodash");
const Welcome = () => {
  return "Welcome to my application. I am Jivan and a part of FunctionUp Plutonium cohort.";
};

const destruct = (arr) => {
  return _.flatten(arr);
};

const addNum = (a, b) => a + b;
module.exports = {
  Welcome,
  addNum,
  destruct,
};
