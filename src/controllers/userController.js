const UserModel = require("../models/userModel");
const BookModel = require("../models/book-lab");

const createUser = async function (req, res) {
  let data = req.body;
  let savedData = await UserModel.create(data);
  res.send({ msg: savedData });
};

const getUsersData = async function (req, res) {
  let allUsers = await UserModel.find();
  res.send({ msg: allUsers });
};

const addBook = async (req, res) => {
  const data = req.body;
  const BookData = await BookModel.create(data);
  res.send({ "Added data": BookData });
};

const getBook = async (req, res) => {
  const findData = await BookModel.find();
  res.send({ AllBooks: findData });
};
module.exports = {
  createUser,
  getUsersData,
  addBook,
  getBook,
};
