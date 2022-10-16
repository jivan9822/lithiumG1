const _ = require("lodash");

const loggers = {
  name: "Jivan",
  Welcome() {
    return `Welcome to my application. I am ${this.name} and a part of FunctionUp Plutonium cohort.`;
  },
  destruct(arr) {
    return _.flatten(arr);
  },
  addNum(a, b) {
    a + b;
  },
};

module.exports = {
  loggers,
};
