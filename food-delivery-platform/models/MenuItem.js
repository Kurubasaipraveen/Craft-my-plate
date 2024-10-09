const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

const MenuItem = sequelize.define('MenuItem', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    availability: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    },
    restaurantId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'restaurants', 
            key: 'id',
        },
        allowNull: false,
    },
}, {
    tableName: 'menu_items', 
    timestamps: true,         
});

module.exports = MenuItem;
