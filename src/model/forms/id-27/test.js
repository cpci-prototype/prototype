'use strict'

module.exports = (sequelize, DataTypes) => {
    const Anticipos = sequelize.define(
        'testPrueba',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            name: {
                type: DataTypes.STRING,
                required: true,
            },
            description: {
                type: DataTypes.STRING,
                required: false,
            },
            description2: {
                type: DataTypes.STRING,
                required: false,
            },
            price: {
                type: DataTypes.FLOAT,
                required: false,
            },
        },
        {
            timestamps: true,
        }
    )

    return Anticipos
}
