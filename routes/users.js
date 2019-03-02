const express = require('express');

const router = express.Router();

router.get('/test', (req, res) => {
  res.send('Hello from users');
});

module.exports = router;
