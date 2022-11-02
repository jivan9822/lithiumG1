const productModel = require("../models/productModel");

exports.createProduct = async (req, res) => {
  try {
    const ProdData = await productModel.create(req.body);
    res.status(200).json({
      status: "succuss",
      result: `${ProdData.length} Products are added to shop!`,
      data: {
        ProdData,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error,
    });
  }
};
