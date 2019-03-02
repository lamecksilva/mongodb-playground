const express = require('express');

const router = express.Router();

const User = require('../models/User');

// @Route   GET api/users/test
// @desc    Testing routes
// @access  Public
router.get('/test', (req, res) => {
  res.send('Hello from users');
});

// @Route   POST api/users/new
// @desc    Register new User
// @access  Public
router.post('/new', (req, res) => {
  // Get data from body
  const userData = req.body;

  // Creating new user with User Schema
  const newUser = new User(userData);

  // Saving new user in DB
  newUser
    .save()
    .then(response => res.json(response))
    .catch(fail => res.json(fail));
});

// @Route   GET api/users/
// @desc    GET all users from DB
// @access  Public
router.get('/', (req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.json(err));
});

// @Route   GET api/users/age/:age
// @desc    Filtering search in DB by age
// @access  Public
router.get('/age/:age', (req, res) => {
  // Query params: find an document with age equals to :id
  User.find({ age: { $eq: parseInt(req.params.age) } })
    .then(users => {
      // If exists an document, return in json
      if (users.length !== 0) {
        res.json(users);
      } else {
        // If user dont exists
        res.json({ msg: 'User not match with this date' });
      }
    })
    .catch(err => res.json(err));
});
module.exports = router;
