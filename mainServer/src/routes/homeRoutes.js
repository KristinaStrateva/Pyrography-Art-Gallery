const router = require('express').Router();

const itemsController = require('../controllers/itemsController');

router.get('/', itemsController.getLastThreeItems);

module.exports = router;