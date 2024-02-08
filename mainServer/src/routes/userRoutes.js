const router = require('express').Router();

const usersController = require('../controllers/usersController');
const { loginValidation, registerValidation } = require('../middlewares/userValidator');

router.post('/login', loginValidation, usersController.login);
router.post('/register', registerValidation, usersController.register);

module.exports = router;