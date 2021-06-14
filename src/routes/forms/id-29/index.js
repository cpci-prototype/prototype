const router = require('express').Router()
const controller = require('../../../controller/forms/id-29/renta-fija')

//default form
router.route('/renta-fija').get(controller.get)

// router.post('/id-29/renta-fija', (req, res, next) => {
//     console.log(req.body)
//     res.redirect('/forms/id-29/renta-fija')
// })

module.exports = router
