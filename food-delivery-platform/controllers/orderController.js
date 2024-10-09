const Order = require('../models/order');
const MenuItem = require('../models/MenuItem'); 

// Create Order
exports.createOrder = async (req, res) => {
    const { deliveryAddress, menuItemIds } = req.body;

    try {
        const items = await MenuItem.findAll({ where: { id: menuItemIds } });
        const totalCost = items.reduce((acc, item) => acc + item.price, 0);

        const order = await Order.create({
            deliveryAddress,
            totalCost,
            userId: req.user.id,
        });

        res.status(201).json({ message: 'Order created successfully', order });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get User Orders
exports.getUserOrders = async (req, res) => {
    try {
        const orders = await Order.findAll({ where: { userId: req.user.id } });
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
