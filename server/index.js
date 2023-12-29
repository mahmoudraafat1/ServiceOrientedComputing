require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
//const connectionn = require("./dbb");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const bookRoutes = require("./routes/book");
const novelRoutes = require("./routes/novel");
const port = 8000;
require('dotenv').config();

connection();
//connectionn();


app.use(cors());

app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use('/book', bookRoutes);
app.use('/novel', novelRoutes);
app.get('/', (req, res) => {
  res.send('Hello BookStore from server side with API');
});

app.listen(port, () => {
  console.log('Connecting to server......');
  console.log(`Server now listening on port ${port}`);
  console.log(`Now you can run localhost:${port} and see a message`);
});