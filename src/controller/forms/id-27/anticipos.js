const objectHelper = require('../../../utils/objectHelper')
const db = require('../../../model/index')

exports.list = (req, res) => {
    db.models['id27_anticipos'].findAll().then((item) => {
        // console.log(item)
        res.render('pages/forms/id27/anticipos', { item })
        // res.json(item)
    })
}

exports.getById = (req, res) => {
    var id = req.params.itemId
    db.models['id27_anticipos'].findByPk(id).then((item) => {
        res.json(item)
    })
}

exports.insert = (req, res) => {
    var item = {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
    }

    db.models['id27_anticipos'].create(item).then((newProduct) => {
        //TODO: PEGAR ID DO NOVO OBJETO
        res.json(newProduct)
    })
}

exports.update = (req, res) => {
    const id = req.params.itemId

    db.models['id27_anticipos']
        .find({
            where: { id: id },
        })
        .then((item) => {
            var request = req.body

            objectHelper.copyProperties(request, item)

            item.save().then((updatedItem) => {
                res.json(updatedItem)
            })
        })
}

exports.partialUpdate = (req, res) => {
    const id = req.params.itemId
    const updates = req.body

    db.models['id27_anticipos']
        .find({
            where: { id: id },
        })
        .then((product) => {
            product.updateAttributes(updates)
        })
        .then((updatedProduct) => {
            res.json(updatedProduct)
        })
}

exports.delete = (req, res) => {
    var id = req.params.itemId
    db.models['id27_anticipos']
        .destroy({
            where: { id: id },
        })
        .then((deletedItem) => {
            res.json(deletedItem)
        })
}
