// User Model Imported
const User = require("../models/userModel");

exports.createUser = async (req, res) => {
  try {
    // here the validitar is complited so i am allowing user free first purchase
    // THIS IS A NEW USER
    req.body.isFreeAppUser = true;

    const userData = await User.create(req.body);
    res.status(200).json({
      status: "success",
      message: `Congratulation! ${userData.name} Your Account Created succussfully...!`,
      Bonus: "Your first Purchase is absulutly free!!!",
      User: userData,
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: {
        error,
      },
    });
  }
};
