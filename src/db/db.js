'use strict'

const Sequelize = require('sequelize')
const env = require('../config')

const sequelize = new Sequelize({
    dialect: env.DATABASE_DIALECT,
    dialectModulePath: 'msnodesqlv8/lib/sequelize',
    dialectOptions: {
        driver: 'SQL Server Native Client 11.0',
        // trustedConnection: 'true',
        instanceName: env.DATABASE_INSTANCE,
    },
    database: env.DATABASE_NAME,
    username: env.DATABASE_USER,
    password: env.DATABASE_PASSWORD,
    host: env.DATABASE_HOST,
    port: env.DATABASE_PORT,
    // logging: true,
})

// Connect all the models/tables in the database to a db object,
//so everything is accessible via one object
const db = {}

db.sequelize = sequelize
db.queryInterface = sequelize.getQueryInterface()
db.DataTypes = Sequelize.DataTypes

module.exports = db
