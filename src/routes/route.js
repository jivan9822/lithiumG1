const express = require("express");
const { createProduct } = require("../controllers/productControler");
const { orderPurchase } = require("../controllers/purchaseOrder");
const { createUser } = require("../controllers/userControler");
const router = express.Router();

// Schema User, Product, Order Imported

// Header validation Imported
const { isPass } = require("../middlewares/headerValidation");
const { isvalid } = require("../middlewares/requestHandler");

// Create User Router
router.route("/createUser").post(isPass, createUser);

// CREATE PRODUCT
router.route("/createProduct").post(createProduct);

// PURCHASE ORDERS

router.route("/purchaseOrder").post(isPass, isvalid, orderPurchase);

module.exports = router;
