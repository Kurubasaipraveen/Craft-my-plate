const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    restaurant: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant', required: true },
    items: [{ name: String, quantity: Number, price: Number }],
    status: { type: String, default: 'Pending' },
});

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;
