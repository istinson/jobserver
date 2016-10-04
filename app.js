const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const api = require('./routes/controller');

app.use(express.static(`${__dirname}/public`));

app.listen(port);