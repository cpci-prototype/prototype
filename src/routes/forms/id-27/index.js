const router = require('express').Router()
const anticipos = require('../../../controller/forms/id-27/anticipos')

// Anticipos
router.route('/anticipos').get(anticipos.list).post(anticipos.insert)

router
    .route('/anticipos/:itemId')
    .get(anticipos.getById)
    .put(anticipos.update)
    .patch(anticipos.partialUpdate)
    .delete(anticipos.delete)

module.exports = router
