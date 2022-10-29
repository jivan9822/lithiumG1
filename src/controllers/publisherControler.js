const publishModel = require("../models/publisherModel");
// Problem 2 create Publisher
exports.createPublisher = async (req, res) => {
  try {
    const publishdata = await publishModel.create(req.body);
    res.status(200).json({
      status: "success",
      result: `${publishdata.length} has been saved to data base`,
      data: {
        publishdata,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      errorData: {
        error,
      },
    });
  }
};

// End of Problem 2

exports.getPublisherData = async function (req, res) {
  let publisher = await publishModel.find();
  res.send({ data: publisher });
};
