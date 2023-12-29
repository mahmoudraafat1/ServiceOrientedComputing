const mongoose = require('mongoose');
require('dotenv').config();

const connection = async () => {
	
  try {
    await mongoose.connect(process.env.DB);
    console.log('Connected to mongodb successfully');
  } catch (error) {
    console.error('Failed to connect to the database', error);
  }
};

module.exports = connection;