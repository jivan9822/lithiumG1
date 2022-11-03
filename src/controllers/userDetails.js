const userModel = require("../models/userModel");

exports.userDetails = async (req, res) => {
  const userDetails = await userModel.findById(req.params.userId);
  res.send(userDetails);
};
