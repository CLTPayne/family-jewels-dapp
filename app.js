const express = require('express');
const app = express();
const dotenv = require('dotenv').config();

const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(3000, () => console.log(`Server is listening on port ${PORT}!`));
