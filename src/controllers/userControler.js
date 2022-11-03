const userModel = require("../models/userModel");

exports.createUser = async (req, res) => {
  try {
    const newUser = await userModel.create(req.body);
    res.status(200).json({
      status: "succuss",
      data: newUser,
    });
  } catch (error) {
    res.status(404).json({
      status: "fali",
      msg: error,
    });
  }

  res.send("User data received!");
};
