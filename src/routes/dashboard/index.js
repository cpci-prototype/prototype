const router = require("express").Router();

//get dashboard
router.get("/", (req, res, next) => {
  res.render("pages/dashboard/dashboard")
});

module.exports =router;
