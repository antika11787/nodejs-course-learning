const productController = require("../controllers/products");

const express = require("express");

const router = express.Router();

router.get("/", productController.getIndex);

router.get("/products", productController.getProducts);

router.get("/cart", productController.getCart);

router.get("/checkout");

module.exports = router;
