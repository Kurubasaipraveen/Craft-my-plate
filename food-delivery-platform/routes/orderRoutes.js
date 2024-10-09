const express = require('express');
const { createOrder, getUserOrders } = require('../controllers/orderController');
const authenticate = require('../middleware/authenticate');

const router = express.Router();

router.post('/', authenticate, createOrder);
router.get('/', authenticate, getUserOrders);

module.exports = router;
