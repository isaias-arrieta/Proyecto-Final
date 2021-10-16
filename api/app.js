const express = require('express');
const app = express();

const postRoute = require('./routes/users');
app.use("/user",postRoute);

module.exports =app;