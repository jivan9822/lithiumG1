const express = require("express");
const clssCont = require("../controllers/controlerClass");
const middleWare = require("../middle-ware/classMiddleWare");
const Cont = new clssCont();
const MiddleCla = new middleWare();
const router = express.Router();

router.get("/test-me", function (req, res) {
  res.send("My first ever api!");
});

router.route("/createUser").post(Cont.createUser);

router.route("/login").post(MiddleCla.checkCrendiantials, Cont.login);

router
  .route("/user/:userId")
  .get(MiddleCla.isHeader, MiddleCla.isTokenValid, Cont.userDetails)
  .put(MiddleCla.isHeader, MiddleCla.isTokenValid, Cont.updateDetails)
  .delete(MiddleCla.isHeader, MiddleCla.isTokenValid, Cont.deleteUser);

module.exports = router;
