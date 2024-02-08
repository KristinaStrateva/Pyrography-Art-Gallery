const router = require('express').Router();

const itemsController = require('../controllers/itemsController');

router.post('/add-item', itemsController.createItem);

module.exports = router;