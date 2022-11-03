const jwt = require("jsonwebtoken");

exports.isTokenValid = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    await jwt.verify(token, process.env.JWT_SEC_CODE);
    next();
  } catch (error) {
    res.status(401).json({
      status: "Authorization fail",
      message: "Please Login Again!!",
    });
  }
};
