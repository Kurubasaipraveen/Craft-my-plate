const express = require('express');
const { createRestaurant, addMenuItem, getRestaurantMenu } = require('../controllers/restaurantController');
const authenticate = require('../middleware/authenticate'); 

const router = express.Router();

router.post('/', authenticate, createRestaurant); 
router.post('/:restaurantId/menu', authenticate, addMenuItem); 
router.get('/:restaurantId/menu', getRestaurantMenu);

module.exports = router;
