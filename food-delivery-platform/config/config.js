require('dotenv').config(); 

const { Sequelize } = require('sequelize');
console.log("DB_NAME:", process.env.DB_NAME);
console.log("DB_USER:", process.env.DB_USER);
console.log("DB_PASSWORD:", process.env.DB_PASSWORD);
console.log("DB_HOST:", process.env.DB_HOST);
console.log("DB_PORT:", process.env.DB_PORT);

const sequelize = new Sequelize(
    process.env.DB_NAME,      
    process.env.DB_USER,      
    process.env.DB_PASSWORD,   
    {
        host: process.env.DB_HOST,
        dialect: 'mysql',           
        port: process.env.DB_PORT || 3306,  
        logging: console.log,       
    }
);
const testConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (err) {
        console.error('Unable to connect to the database:', err);
    }
};

testConnection(); 

module.exports = sequelize;
