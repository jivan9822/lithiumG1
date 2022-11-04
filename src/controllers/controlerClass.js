// JST AND USERMODEL USED
const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");

class controler {
  // CREATING NEW USER
  createUser = async (req, res) => {
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
  };

  // LOGIN HANDLER CONTROLER
  login = (req, res) => {
    try {
      // CREATING TOKEN USING JWT HEADER USING SECERATE KEY
      const token = jwt.sign({ id: req.body.id }, process.env.JWT_SEC_CODE, {
        // ADDING EXPIRATION OF TOKEN
        expiresIn: process.env.JWT_EXPIRE_IN,
      });
      res.status(200).json({
        status: "succuss",
        token,
      });
    } catch (error) {
      res.status(404).json({
        status: "fail",
        msg: error,
      });
    }
  };

  // SENDING USER DETAILS EXCEPT PASSWORD AFTER VELIDATION OF TOKEN
  userDetails = async (req, res) => {
    const userDetails = await userModel.findById(req.params.userId);
    res.send(userDetails);
  };

  // UPDATING USER DETAILS ON HIS REQUEST
  updateDetails = async (req, res) => {
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

  // DELETE USER CONTROLER
  deleteUser = async (req, res) => {
    // RECEIVING USE-ID FROM CLINT
    const user_id = req.params.userId;

    // INSTADE OF DELETING USER I CHANGE ISDELETED FLAG TO TRUE TO KEEP BEST PRACTICE
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
