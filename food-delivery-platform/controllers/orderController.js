const Order = require('../models/Order');

exports.placeOrder = async (req, res) => {
    const { items, restaurantId } = req.body;
    const order = new Order({ user: req.user.id, restaurant: restaurantId, items });
    await order.save();
    res.json(order);
};
