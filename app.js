const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const api = require('./routes/controller');
const config = require('./config');
const mongoose = require('mongoose');
mongoose.connect(config.getDbConnectionString(), {});

app.use(express.static(`${__dirname}/public`));
api(app);

app.listen(port);
console.log(`listening on port ${port}`);