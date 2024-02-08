const router = require('express').Router();

const usersController = require('../controllers/usersController');

router.get('/login', usersController.login);
router.get('/register', usersController.register);

module.exports = router;