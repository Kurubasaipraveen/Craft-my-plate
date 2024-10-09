const { DataTypes } = require('sequelize');
const sequelize = require('../config/config'); 

const User = sequelize.define('User', {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    tableName: 'users', 
});

module.exports = User;
