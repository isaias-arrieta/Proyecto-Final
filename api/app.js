const express = require('express');
const app = express();
const multer = require("multer");
const cors = require('cors');
const bodyParser = require('body-parser');
app.use(cors());

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));

app.use('/uploads', express.static('uploads'));

const userRoute = require('./routes/users');
const userAuthRoute = require('./routes/usersAuth');
const pathRoute = require('./routes/path');
app.use("/user",userRoute);
app.use("/userAuth",userAuthRoute);
app.use("/path",pathRoute);

module.exports =app;