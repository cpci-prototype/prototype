const router = require("express").Router();

//get dashboard
router.get("/", (req, res, next) => {
    res.render("pages/profile/overview1")
});

router.get("/overview1", (req, res, next) => {
    res.render("pages/profile/overview1")
});

router.get("/overview2", (req, res, next) => {
    res.render("pages/profile/overview2")
});

router.get("/overview3", (req, res, next) => {
    res.render("pages/profile/overview3")
});

module.exports =router;