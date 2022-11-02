const express = require("express");
const { createProduct } = require("../controllers/productControler");
const { orderPurchase } = require("../controllers/purchaseOrder");
const { createUser } = require("../controllers/userControler");
const router = express.Router();

// HEADER VALIDATION IMPORTED

const { isPass } = require("../middlewares/headerValidation");
const { isvalid } = require("../middlewares/requestHandler");

// CREATE USER ROUTER
router.route("/createUser").post(isPass, createUser);

// CREATE PRODUCT ROUTER
router.route("/createProduct").post(createProduct);

// PURCHASE ORDERS ROUTER

router.route("/purchaseOrder").post(isPass, isvalid, orderPurchase);

module.exports = router;
