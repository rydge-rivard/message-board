var express = require("express");
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Rick",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Eli",
    added: new Date(),
  },
];

router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

router.get("/new", function (req, res, next) {
  res.render("userForm", { title: "New User", messages: messages });
});

router.post("/new", function (req, res, next) {
  messages.push({
    text: req.body.msg,
    user: req.body.msgUser,
    added: new Date(),
  });
  res.redirect("/");
});

module.exports = router;
