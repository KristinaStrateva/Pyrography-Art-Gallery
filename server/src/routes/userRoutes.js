const router = require('express').Router();

const usersController = require('../controllers/usersController');
const { loginValidation, registerValidation } = require('../middlewares/userValidator');

router.post('/login', loginValidation, usersController.login);
router.post('/register', registerValidation, usersController.register);
router.post('/logout', usersController.logout);

module.exports = router;