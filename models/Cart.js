const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CartSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  user_data: {
    type: Object,
    require: true
  }
});

const Cart = mongoose.model('cart', CartSchema);

module.exports = Cart;
