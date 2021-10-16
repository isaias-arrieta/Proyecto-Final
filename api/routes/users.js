const express = require('express');
const usersController = require('../controllers/users.controller');
const checkAuthMiddleware = require('../middleware/checkj-auth')
const router = express.Router();

router.post("/sing-up", usersController.signUp);
router.post("/login", usersController.login);
router.get("/:id", checkAuthMiddleware.checkAuth, usersController.getProfile);
router.get("/", checkAuthMiddleware.checkAuth, usersController.allProfiles);
router.patch("/:id", checkAuthMiddleware.checkAuth, usersController.updateUser);
router.delete("/:id", checkAuthMiddleware.checkAuth, usersController.deleteUser);
module.exports = router;
