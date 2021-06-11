'use strict'

module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define(
        'id27_anticipos',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            fondo: {
                type: DataTypes.STRING,
                required: true,
            },
            nominales: {
                type: DataTypes.DECIMAL(25, 4),
                required: false,
            },
            moneda: {
                type: DataTypes.STRING,
                required: false,
            },

            afp_paga: {
                type: DataTypes.DECIMAL(25, 4),
                required: false,
            },
            afp_recibe: {
                type: DataTypes.DECIMAL(25, 4),
                required: false,
            },
        },
        {
            timestamps: true,
        }
    )

    return model
}
