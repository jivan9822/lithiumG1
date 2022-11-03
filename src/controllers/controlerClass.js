const userModel = require("../models/userModel");

class controler {
  deleteUser = async (req, res) => {
    const user_id = req.params.userId;

    const user = await userModel.updateOne(
      { _id: user_id },
      {
        $set: {
          isDeleted: true,
        },
      },
      {
        new: true,
      }
    );
    res.status(200).json({
      status: "Deleted Succussfully",
      data: {
        UpdatedDetails: user,
      },
    });
  };
}

module.exports = controler;