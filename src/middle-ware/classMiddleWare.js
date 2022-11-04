// ONE AND ONLY USERMODEL IS INPORTED
const userModel = require("../models/userModel");

// JSONWEBTOKEN IS IMPORTED
const jwt = require("jsonwebtoken");

class middleWare {
  // 1) CHEKING USER EMAIL AND PASSWORD HERE
  checkCrendiantials = async (req, res, next) => {
    try {
      // EMAIL ID EXTRACTING FROM BODY
      const emailId = req.body.emailId;

      // FINDING USERDATA USING EMAIL ID
      const user = await userModel
        .findOne({ emailId: emailId })

        // ADD SELECT METHOD TO GET PASSWORD BECAUSE PASSWORD SELECT IS FALSE IN USER-MODEL
        .select("password");

      // SETTING MONGOOSE ID IN BODY TO CREATE JSON TOKEN IN LOGIN METHOD
      req.body.id = user._id;

      // CHEKING PASSWORD MATCH AND IF FALI RETURN FROM HERE
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

  // 3) CHEKING FOR A VALID TOKEN AND HEADER
  isTokenValid = async (req, res, next) => {
    try {
      // EXTRACTION OF TOKEN FROM HEADERS
      const token = req.headers.authorization;

      // VERIFY WITH TOKEN AND SECRET CODE FROM CONFIG
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
