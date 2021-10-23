const express = require('express');
const cors = require('cors')
const usersController = require('../controllers/users.controller');

const router = express.Router();

router.post("/signup", usersController.signUp);
router.post("/login", usersController.login);

module.exports = router;
