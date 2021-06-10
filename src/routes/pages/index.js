const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.render("pages/pages/wizards/layout1")
});

// Wizards
router.get("/wizards/layout1", (req, res, next) => {
  res.render("pages/pages/wizards/layout1")
});

router.get("/wizards/layout2", (req, res, next) => {
  res.render("pages/pages/wizards/layout2")
});

router.get("/wizards/layout3", (req, res, next) => {
  res.render("pages/pages/wizards/layout3")
});

// Blog
router.get("/blog/layout1", (req, res, next) => {
  res.render("pages/pages/blog/layout1")
});

router.get("/blog/layout2", (req, res, next) => {
  res.render("pages/pages/blog/layout2")
});

router.get("/blog/layout3", (req, res, next) => {
  res.render("pages/pages/blog/layout3")
});

// Pricing
router.get("/pricing/layout1", (req, res, next) => {
  res.render("pages/pages/pricing/layout1")
});

router.get("/pricing/layout2", (req, res, next) => {
  res.render("pages/pages/pricing/layout2")
});

// Invoice
router.get("/invoice/layout1", (req, res, next) => {
  res.render("pages/pages/invoice/layout1")
});

router.get("/invoice/layout2", (req, res, next) => {
  res.render("pages/pages/invoice/layout2")
});

// Faq
router.get("/faq/layout1", (req, res, next) => {
  res.render("pages/pages/faq/layout1")
});

router.get("/faq/layout2", (req, res, next) => {
  res.render("pages/pages/faq/layout2")
});

router.get("/faq/layout3", (req, res, next) => {
  res.render("pages/pages/faq/layout3")
});

// Login
router.get("/login", (req, res, next) => {
  res.render("pages/pages/login", { layout: 'partials/auth/layout' })
});

// Register
router.get("/register", (req, res, next) => {
  res.render("pages/pages/register", { layout: 'partials/auth/layout' })
});

// Error page
router.get("/error-page", (req, res, next) => {
  res.render("pages/pages/error", { layout: 'partials/maintenance/layout' })
});

// Update profile
router.get("/update-profile", (req, res, next) => {
  res.render("pages/pages/update-profile")
});

// Change password
router.get("/change-password", (req, res, next) => {
  res.render("pages/pages/change-password")
});

module.exports =router;
