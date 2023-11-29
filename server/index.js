const express = require('express');
//const bodyParser = require('body-parser');
const app = express();
const port = 8000;
require('dotenv').config();
//const connection = require("./db");
//const usersRoutes = require("./routes/userController");
//const ordersRoutes = require("./routes/orderController");


//connection();


app.use(express.json());


//app.use('/users', usersRoutes);
//app.use('/orders', ordersRoutes);


app.get('/', (req, res) => {
  res.send('Hello REST Service Project');
});

app.listen(port, () => {
  console.log('Connecting to server......');
  console.log(`Server now listening on port ${port}`);
  console.log(`Now you can run localhost/${port} and see a message`);
});