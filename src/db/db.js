'use strict'

const Sequelize = require('sequelize')
const env = require('../config')

const sequelize = new Sequelize(
    env.DATABASE_NAME,
    env.DATABASE_USER,
    env.DATABASE_PASSWORD,
    {
        host: env.DATABASE_HOST,
        port: env.DATABASE_PORT,
        dialect: env.DATABASE_DIALECT,
        // logging: true,
    }
)

// Connect all the models/tables in the database to a db object,
//so everything is accessible via one object
const db = {}

db.sequelize = sequelize
db.queryInterface = sequelize.getQueryInterface()
db.DataTypes = Sequelize.DataTypes

module.exports = db
