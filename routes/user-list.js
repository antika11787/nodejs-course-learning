const express = require("express");

const router = express();

const userData = require("./add-user");

router.get("/", (req, res, next) => {
  res.render("user-list", {
    pageTitle: "Users",
    path: "/",
    users: userData.users,
  });
});

module.exports = router;
