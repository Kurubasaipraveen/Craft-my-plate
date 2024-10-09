
const { DataTypes } = require('sequelize');
const sequelize = require('../config/config'); 

// Order model
const Order = sequelize.define('Order', {
    orderNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'users',
            key: 'id',
        },
    },
    restaurantId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'restaurants',
            key: 'id',
        },
    },
    status: {
        type: DataTypes.STRING,
        defaultValue: 'pending', 
    },
}, {
    tableName: 'orders', 
    timestamps: true,
});
Order.associate = (models) => {
    Order.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user', 
    });
    Order.belongsTo(models.Restaurant, {
        foreignKey: 'restaurantId',
        as: 'restaurant', 
    });
};

module.exports = Order;
