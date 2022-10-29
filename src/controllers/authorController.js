const AuthorModel = require("../models/authorModel");
// Prob 1 create author
const createAuthor = async function (req, res) {
  try {
    let author = req.body;
    let authorCreated = await AuthorModel.create(author);
    // res.send({data: authorCreated})
    res.status(200).json({
      status: "succuess",
      result: `${authorCreated.length} added to dataBase`,
      data: {
        authorCreated,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error,
    });
  }
};
// end Prob 1

const getAuthorsData = async function (req, res) {
  let authors = await AuthorModel.find().select({
    authorName: 1,
    _id: 0,
    rating: 1,
  });
  res.send({ data: authors });
};

module.exports.createAuthor = createAuthor;
module.exports.getAuthorsData = getAuthorsData;
