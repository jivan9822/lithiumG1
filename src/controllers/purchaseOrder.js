const orderModel = require("../models/orderModel");

exports.orderPurchase = (req, res) => {
  try {
    const userOrder = orderModel.create(req.body);
    res.status(200).json({
      status: "success",
      result: "Your order is placed successfully!!",
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
