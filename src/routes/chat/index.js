const router = require("express").Router();

//get dashboard
router.get("/", (req, res, next) => {
  res.render("pages/chat/chat")
});

module.exports =router;
