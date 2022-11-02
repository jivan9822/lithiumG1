const userModel = require("../models/userModel");
const productModel = require("../models/productModel");

exports.isvalid = async (req, res, next) => {
  try {
    const { userId, productId } = req.body;
    const userFound = await userModel.findById(userId);
    const prodFound = await productModel.findById(productId);
    // CHEKING isFreeUser AND ADD TO BODY
    if (userFound["isFreeAppUser"]) {
      //SENDING TO BODY FOR CREATE ORDER
      req.body.isFreeAppUser = true;
      req.body.amount = 0;
      // UPDATING USER
      userFound.isFreeAppUser = false;
      userFound.save();
    } else {
      if (userFound.balance < +prodFound.price) {
        return res.send("Insufficient ballance!");
      }
      //SENDING TO BODY FOR CREATE ORDER
      req.body.isFreeAppUser = false;
      req.body.amount = +prodFound.price;
      // UPDATING USER BALANCE
      userFound.balance -= +prodFound.price;
      userFound.balance = userFound.balance.toFixed(2);
      userFound.save();
    }
    req.body.date = new Date();
    next();
  } catch (error) {
    res.status(404).json({
      status: `User Id or Product Id is not correct!!`,
      message: error,
    });
  }
};
