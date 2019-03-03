const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const users = require('./routes/users');
const cart = require('./routes/cart');

app.use(bodyParser.json());
app.use('/api/users', users);
app.use('/api/cart', cart);

mongoose
  .connect('mongodb://db:27017/mongodb-playground', {
    useNewUrlParser: true
  })
  .then(response => console.log('MongoDB Connected'))
  .catch(error => console.log(error));

app.get('/', (req, res) => {
  res.send('Hello World');
});

const port = process.env.PORT || 9000;

app.listen(port, () => {
  console.log(`App Listening in port ${port}`);
});
