const router = require("express").Router();

//default form
router.get("/id-29/renta-fija", (req, res, next) => {
    res.render("pages/forms/id29/renta-fija");
});

module.exports = router