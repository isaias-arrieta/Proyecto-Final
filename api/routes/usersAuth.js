const express = require('express');
const usersController = require('../controllers/users.controller');
const checkAuth= require('../middleware/checkj-auth')
const router = express.Router();


router.get("/:id", checkAuth.checkAuth, usersController.getProfile);
router.get("/get/All", checkAuth.checkAuth, usersController.allProfiles);
router.patch("/:id", checkAuth.checkAuth, usersController.updateUser);
router.delete("/:id", checkAuth.checkAuth, usersController.deleteUser);
module.exports = router;
