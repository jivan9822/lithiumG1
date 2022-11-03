const jwt = require("jsonwebtoken");

exports.login = (req, res) => {
  try {
    const token = jwt.sign({ id: req.body.id }, process.env.JWT_SEC_CODE, {
      expiresIn: process.env.JWT_EXPIRE_IN,
    });
    res.status(200).json({
      status: "succuss",
      token,
    });
  } catch (error) {}
};
