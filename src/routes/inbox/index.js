const router = require("express").Router();

//get dashboard
router.get("/", (req, res, next) => {
  res.render("pages/inbox/inbox")
});

module.exports =router;
