const userModel = require("../models/userModel");

exports.updateDetails = async (req, res) => {
  const user_id = req.params.userId;

  const user = await userModel.updateOne(
    { _id: user_id },
    {
      $set: {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        mobile: req.body.mobile,
        emailId: req.body.emailId,
        password: req.body.password,
        gender: req.body.gender,
      },
    },
    {
      new: true,
    }
  );
  res.status(200).json({
    status: "succuss",
    data: {
      UpdatedDetails: user,
    },
  });
};
