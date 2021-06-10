const router = require("express").Router();

//get dashboard
router.get("/", (req, res, next) => {
    res.render("pages/users/layout1")
});

router.get("/layout1", (req, res, next) => {
    res.render("pages/users/layout1")
});

router.get("/layout2", (req, res, next) => {
    res.render("pages/users/layout2")
});

router.get("/layout3", (req, res, next) => {
    res.render("pages/users/layout3")
});

module.exports =router;