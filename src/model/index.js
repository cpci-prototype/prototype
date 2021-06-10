const { sequelize, DataTypes } = require('../db/db')
const { applyExtraSetup } = require('./extraSetup')
const { getFiles, filterFilesModel } = require('../utils/functions')

const Folder = 'src/model'
const models = filterFilesModel(getFiles(Folder))
// console.log(models)
// load models exluding, extrasetup and index file

models.forEach(function (file) {
    require('./' + file)(sequelize, DataTypes)
})
// execute any extra setup after models are defined

applyExtraSetup(sequelize.models)

module.exports = sequelize
