const router = require('express').Router();

const itemsController = require('../controllers/itemsController');

router.get('/:collectionName', itemsController.getAllItemsFromCollection);
router.post('/add-item', itemsController.createItem);
router.post('/:collectionName/:itemId/like', itemsController.likeItem);

module.exports = router;