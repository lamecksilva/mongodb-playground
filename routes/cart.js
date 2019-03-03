const express = require('express');
const router = express.Router();

const Cart = require('../models/Cart');
const User = require('../models/User');

// @Route   GET api/cart/test
// @desc    TEST route
// @access  Public
router.get('/test', (req, res) => {
  res.send('Hello From cart');
});

router.post('/new/:id', (req, res) => {
  User.findOne({ _id: { $eq: req.params.id } }).then(user => {
    if (user) {
      const newCart = new Cart({
        name: req.body.name,
        quantity: req.body.quantity,
        user_data: user
      });

      newCart
        .save()
        .then(nCart => res.json(nCart))
        .catch(fail => res.json(fail));
    } else {
      res.json({ msg: 'User not found' });
    }
  });
});

// @Route   GET api/cart/
// @desc    Returns all documents
// @access  Public
router.get('/', (req, res) => {
  Cart.find()
    .then(carts => {
      res.json(carts);
    })
    .catch(err => res.json(err));
});

module.exports = router;
