const router = require('express').Router();

const usersController = require('../controllers/usersController');
const { loginValidation, registerValidation } = require('../middlewares/userValidator');
const loginLimiter = require('../middlewares/loginLimiter');
const verifyJWT = require('../middlewares/verifyJWT');

router.post('/login', loginValidation, loginLimiter, usersController.login);
router.post('/register', registerValidation, usersController.register);
router.post('/logout', verifyJWT, usersController.logout);

module.exports = router;