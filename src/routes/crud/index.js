const router = require("express").Router();

//get dashboard
router.get("/", (req, res, next) => {
    res.render("pages/crud/data-list")
});

router.get("/data-list", (req, res, next) => {
    res.render("pages/crud/data-list")
});

router.get("/form", (req, res, next) => {
    res.render("pages/crud/form")
});

module.exports =router;