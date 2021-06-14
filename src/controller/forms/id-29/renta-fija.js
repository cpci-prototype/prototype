const { models } = require('../../../model/index')
const { schemaForm } = require('./storage')
exports.get = async (req, res) => {
    // requiring Models
    const { RentaFija } = models
    res.render('pages/forms/id29/renta-fija', { schemaForm })
    // Testing Models
    try {
        // await RentaFija.sync({ alter: true })
        const dataRF = await RentaFija.findAll({ raw: true })

        // log
        console.log(dataRF, dataAN)
    } catch (error) {
        console.log(error)
    }
}
