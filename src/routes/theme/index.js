const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.render("pages/dashboard/dashboard.ejs")
});

router.get("/normal-menu", (req, res, next) => {
  res.locals.theme.typeMenu = 'normal'
  res.redirect('back');
});

router.get("/simple-menu", (req, res, next) => {
  res.locals.theme.typeMenu = 'simple'
  res.redirect('back');
});

router.get("/top-menu", (req, res, next) => {
  res.locals.theme.typeMenu = 'top'
  res.redirect('back');
});

router.get("/mode", (req, res, next) => {

  res.locals.theme.mode = res.locals.theme.mode === 'dark' ? 'light' : 'dark'
  res.redirect('back');
});

module.exports =router;
