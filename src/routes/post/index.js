const router = require("express").Router();

//get dashboard
router.get("/", (req, res, next) => {
  res.render("pages/post/post")
});

module.exports =router;
