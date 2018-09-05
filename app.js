const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const path = require('path');

const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/index.html')));

app.listen(3000, () => console.log(`Server is listening on port ${PORT}!`));
