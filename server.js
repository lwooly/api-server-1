const express = require("express")


const app = express();

require('./middleware.js')(app);
require('./db');

module.exports = app;