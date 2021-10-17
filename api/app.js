const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use('/uploads', express.static('uploads'));

const userRoute = require('./routes/users');
const userAuthRoute = require('./routes/usersAuth');
const pathRoute = require('./routes/path');
app.use("/user",userRoute);
app.use("/userAuth",userAuthRoute);
app.use("/path",pathRoute);

module.exports =app;