module.exports = (sequelize, DataTypes) => {
    sequelize.define('RentaFija', {
        name: {
            type: DataTypes.STRING,
            required: true,
        },
        description: {
            type: DataTypes.STRING,
            required: false,
        },
        asd: {
            type: DataTypes.INTEGER,
            required: false,
        },
    })
}
