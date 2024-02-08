const router = require('express').Router();

const usersController = require('../controllers/usersController');

router.get('/login', usersController.login);

module.exports = router;