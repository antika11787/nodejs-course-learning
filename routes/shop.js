const path = require("path");
const rootDir = require("../utils/path");
const adminData = require("./admin");

const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  // res.sendFile(path.join(rootDir, "views", "shop.html"));
  const products = adminData.products;
  // we can pass data like this to the engine and the data will be available in the .pug file
  res.render("shop", {
    prods: products,
    pageTitle: "Shop",
    path: "/",
  });
});

module.exports = router;
