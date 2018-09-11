const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const index = require('./routes/index');

const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use('/', index);

app.listen(3000, () => console.log(`Server is listening on port ${PORT}!`));

app.use((err, req, res, next) => {
  console.log(err)
  res.status(500).send('Something is not quite right!'));
});

module.exports = app;
