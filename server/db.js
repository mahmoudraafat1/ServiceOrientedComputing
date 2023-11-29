const mongoose = require('mongoose');
require('dotenv').config();

const connection = async () => {
	
  try {
    const urlParts = process.env.DB.split(':');
    const username = urlParts[1].split('//')[1].split(':')[0];
    
    await mongoose.connect(process.env.DB, {
		
      useNewUrlParser: true,
      useUnifiedTopology: true,
	  
    });
    console.log('Waiting for mongodb connection......');
    console.log('Connected to the database successfully. Username:', username);
  } catch (error) {
    console.error('Failed to connect to the database', error);
  }
};

module.exports = connection;