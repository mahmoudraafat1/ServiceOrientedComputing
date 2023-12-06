require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");

//REMOVE THE COMMENTS AFTER CONNECTING TO YOUR MONGO DB IN SEND THE URL IN THE ENV FILE
//const userRoutes = require("./routes/users");
//const authRoutes = require("./routes/auth");
const express = require('express');
//const bodyParser = require('body-parser');
const port = 8000;
require('dotenv').config();

//const connection = require("./db");


//connection();


app.use(express.json());

//app.use("/api/users", userRoutes);
//app.use("/api/auth", authRoutes);


app.get('/', (req, res) => {
  res.send('Hello REST Service Project');
});

app.listen(port, () => {
  console.log('Connecting to server......');
  console.log(`Server now listening on port ${port}`);
  console.log(`Now you can run localhost/${port} and see a message`);
});