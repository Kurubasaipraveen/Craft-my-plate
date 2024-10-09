
const { DataTypes } = require('sequelize');
const sequelize = require('../config/config'); 

const Restaurant = sequelize.define('Restaurant', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    tableName: 'restaurants', 
    timestamps: true,        
});

module.exports = Restaurant;
