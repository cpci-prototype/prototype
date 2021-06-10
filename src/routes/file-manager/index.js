const router = require("express").Router();

//get dashboard
router.get("/", (req, res, next) => {
  res.render("pages/file-manager/file-manager")
});

module.exports =router;
