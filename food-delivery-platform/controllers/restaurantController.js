const Restaurant = require('../models/Restaurant'); 
const MenuItem = require('../models/MenuItem'); 

// Create Restaurant
exports.createRestaurant = async (req, res) => {
    const { name, location } = req.body;

    try {
        const restaurant = await Restaurant.create({ name, location });
        res.status(201).json({ message: 'Restaurant created successfully', restaurant });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Add Menu Item
exports.addMenuItem = async (req, res) => {
    const { restaurantId } = req.params;
    const { name, description, price, availability } = req.body;

    try {
        const menuItem = await MenuItem.create({ name, description, price, availability, restaurantId });
        res.status(201).json({ message: 'Menu item added successfully', menuItem });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get Restaurant Menu
exports.getRestaurantMenu = async (req, res) => {
    const { restaurantId } = req.params;

    try {
        const menuItems = await MenuItem.findAll({ where: { restaurantId } });
        res.status(200).json(menuItems);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
