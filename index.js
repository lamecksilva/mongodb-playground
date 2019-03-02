const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const users = require('./routes/users');

app.use(bodyParser.json());
app.use('/api/users', users);

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
