const productController = require("../controllers/products");

const express = require("express");

const router = express.Router();

router.get("/", productController.getIndex);

router.get("/products", productController.getProducts);

router.get("/products/:productId", productController.getProduct);

router.get("/products/delete");

router.get("/cart", productController.getCart);

router.post("/cart", productController.postCart);

router.get("/orders", productController.getOrders);

router.get("/checkout");

module.exports = router;
