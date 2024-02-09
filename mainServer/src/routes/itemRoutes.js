const router = require('express').Router();

const itemsController = require('../controllers/itemsController');

router.get('/:collectionName', itemsController.getAllItemsFromCollection);
router.post('/add-item', itemsController.createItem);

module.exports = router;