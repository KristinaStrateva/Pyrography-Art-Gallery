const router = require('express').Router();

const usersController = require('../controllers/usersController');
const { loginValidation, registerValidation } = require('../middlewares/userValidator');
const loginLimiter = require('../middlewares/loginLimiter');

router.get('/refresh', usersController.refresh);
router.post('/login', loginValidation, loginLimiter, usersController.login);
router.post('/register', registerValidation, usersController.register);
router.post('/logout', usersController.logout);

module.exports = router;