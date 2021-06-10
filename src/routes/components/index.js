const router = require("express").Router();

//get dashboard
router.get("/", (req, res, next) => {
  res.render("pages/components/table/regular-table")
});

// Table
router.get("/table/regular-table", (req, res, next) => {
  res.render("pages/components/table/regular-table")
});
router.get("/table/tabulator", (req, res, next) => {
  res.render("pages/components/table/tabulator")
});

// Overlay
router.get("/overlay/modal", (req, res, next) => {
  res.render("pages/components/overlay/modal")
});
router.get("/overlay/slide-over", (req, res, next) => {
  res.render("pages/components/overlay/slide-over")
});
router.get("/overlay/notification", (req, res, next) => {
  res.render("pages/components/overlay/notification")
});

// Accordion
router.get("/accordion", (req, res, next) => {
  res.render("pages/components/accordion")
});

// Button
router.get("/button", (req, res, next) => {
  res.render("pages/components/button")
});

// Alert
router.get("/alert", (req, res, next) => {
  res.render("pages/components/alert")
});

// Progress bar
router.get("/progress-bar", (req, res, next) => {
  res.render("pages/components/progress-bar")
});

// Tooltip
router.get("/tooltip", (req, res, next) => {
  res.render("pages/components/tooltip")
});

// Dropdown
router.get("/dropdown", (req, res, next) => {
  res.render("pages/components/dropdown")
});

// Typography
router.get("/typography", (req, res, next) => {
  res.render("pages/components/typography")
});

// Icon
router.get("/icon", (req, res, next) => {
  res.render("pages/components/icon")
});

// Loading Icon
router.get("/loading-icon", (req, res, next) => {
  res.render("pages/components/loading-icon")
});

module.exports =router;
