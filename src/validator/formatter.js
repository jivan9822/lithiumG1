// Problem 3
// Module 3: src/validator/formatter.js
// - trim() : calls the trim function on a hardcoded string for example ‘ functionUp  ’
// - changetoLowerCase() : changes the case of the string to lower. [Call toLowerCase() on a hardcoded string]
// - changeToUpperCase() : changes the case of the string to upper case [Call toUpperCase() on a hardcoded string]

// Call all these functions in route.js inside the test-me route handler
const str = "Jivan Rajpal Toshniwal   ";

const trim = (str) => str.trim();
const changetoLowerCase = (str) => str.toLowerCase();
const changeToUpperCase = (str) => str.toUpperCase();

module.exports = {
  trim,
  changetoLowerCase,
  changeToUpperCase,
};
