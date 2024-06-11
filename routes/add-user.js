const express = require("express");

const router = express();

const users = [];

router.get("/add-user", (req, res, next) => {
  res.render("add-user", { pageTitle: "Add User", path: "/add-user" });
});

router.post("/add-user", (req, res, next) => {
  users.push({ username: req.body.username });
  res.redirect("/");
});

module.exports = {
  routes: router,
  users: users,
};
