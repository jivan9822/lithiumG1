const express = require("express");
const { deleteUser } = require("../controllers/deleteUser");
const { login } = require("../controllers/loginControler");
const { updateDetails } = require("../controllers/updateDetails");
const { createUser } = require("../controllers/userControler");
const { userDetails } = require("../controllers/userDetails");
const { checkCrendiantials } = require("../middle-ware/checkUiPass");
const { isHeader } = require("../middle-ware/isHeader");
const { isTokenValid } = require("../middle-ware/istokenvalid");
const clssCont = require("../controllers/controlerClass");
const Cont = new clssCont;
const router = express.Router();

router.get("/test-me", function (req, res) {
  res.send("My first ever api!");
});

router.route("/createUser").post(createUser);

router.route("/login").post(checkCrendiantials, login);

router
  .route("/user/:userId")
  .get(isHeader, isTokenValid, userDetails)
  .put(isHeader, isTokenValid, updateDetails)
  .delete(isHeader, isTokenValid, Cont.deleteUser);

module.exports = router;
