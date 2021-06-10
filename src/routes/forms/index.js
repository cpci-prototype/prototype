const router = require('express').Router()

// Regular form
router.get('/regular-form', (req, res, next) => {
    res.render('pages/forms/regular-form')
})
// Datepicker
router.get('/datepicker', (req, res, next) => {
    res.render('pages/forms/datepicker')
})

// Tail select
router.get('/tail-select', (req, res, next) => {
    res.render('pages/forms/tail-select')
})
// file upload
router.get('/file-upload', (req, res, next) => {
    res.render('pages/forms/file-upload')
})

// wysiwyg editor
router.get('/wysiwyg-editor', (req, res, next) => {
    res.render('pages/forms/wysiwyg-editor')
})
// Validation
router.get('/validation', (req, res, next) => {
    res.render('pages/forms/validation')
})
module.exports = router
