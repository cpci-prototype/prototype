const router = require("express").Router();

// Chart
router.get("/chart", (req, res, next) => {
  res.render("pages/widgets/chart")
});
// Image zoom
router.get("/image-zoom", (req, res, next) => {
  res.render("pages/widgets/image-zoom")
});

// Slider
router.get("/slider", (req, res, next) => {
  res.render("pages/widgets/slider")
});

module.exports = router;
