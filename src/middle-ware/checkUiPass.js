const userModel = require("../models/userModel");

exports.checkCrendiantials = async (req, res, next) => {
  try {
    const emailId = req.body.emailId;
    const user = await userModel
      .findOne({ emailId: emailId })
      .select("password");
    req.body.id = user._id;
    req.body.password === user.password
      ? next()
      : res.send("Password Incorrect!!");
  } catch (error) {
    res.status(404).json({
      status: "fail",
      msg: "Crendaitials Incorrect!!",
    });
  }
};
