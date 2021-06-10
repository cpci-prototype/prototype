const router = require("express").Router();

//get dashboard
router.get("/", (req, res, next) => {
  res.render("pages/point-sales/point-sales")
});

module.exports =router;
