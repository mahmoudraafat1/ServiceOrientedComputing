const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  bookIds: {
    type: [String],
    required: true,
  },
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
