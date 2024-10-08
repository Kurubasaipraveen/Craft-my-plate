const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const restaurantRoutes = require('./routes/restaurantRoutes');
const orderRoutes = require('./routes/orderRoutes');
const authMiddleware = require('./middleware/authMiddleware');

const app = express();
const MONGO_URI = 'mongodb://127.0.0.1:27017/myLocalDatabase';  // Change to your MongoDB URI
const PORT = 5000;

app.use(express.json());

app.use('/auth', authRoutes);
app.use('/users', authMiddleware, userRoutes);
app.use('/restaurants', restaurantRoutes);
app.use('/orders', authMiddleware, orderRoutes);

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1); // Exit the application if there's an error
  });
