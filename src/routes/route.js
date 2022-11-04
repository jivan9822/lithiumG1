const express = require("express");
const router = express.Router();

// MAIN CLASS CONTROLER IMPORTED
const clssCont = require("../controllers/controlerClass");

// MIDDLEWARE CLASS CONTROLER IMPORTED
const middleWare = require("../middle-ware/classMiddleWare");

const Cont = new clssCont();
const MiddleCla = new middleWare();

router.get("/test-me", function (req, res) {
  req.query;
  res.send("My first ever api!");
});

// CREATING NEW USER
router.route("/createUser").post(Cont.createUser);

// LOGIN HANDLER ROUTER
router.route("/login").post(MiddleCla.checkCrendiantials, Cont.login);

// ALL OTHER REQUESTS GET-DETAILS UPDATE-DETAILS DELETE-USER
router
  .route("/user/:userId")
  .get(MiddleCla.isTokenValid, Cont.userDetails)
  .put(MiddleCla.isTokenValid, Cont.updateDetails)
  .delete(MiddleCla.isTokenValid, Cont.deleteUser);

module.exports = router;
