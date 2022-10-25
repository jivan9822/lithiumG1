const bookStore = require("../models/bookModel2");

const addBook2 = async (req, res) => {
  const bookCreate = await bookStore.create(req.body);
  res.send(bookCreate);
};

module.exports.addBook2 = addBook2;
