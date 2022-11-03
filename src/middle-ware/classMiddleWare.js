const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");

class middleWare {
  checkCrendiantials = async (req, res, next) => {
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

  isHeader = (req, res, next) => {
    return req.headers["authorization"]
      ? next()
      : res.send("Please login angain!!");
  };

  isTokenValid = async (req, res, next) => {
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
}

module.exports = middleWare;
