const router = require('express').Router();

const itemsController = require('../controllers/itemsController');

router.get('/:collectionName', itemsController.getAllItemsFromCollection);
router.get('/:collectionName/:itemId/details', itemsController.getItemById);
router.post('/add-item', itemsController.createItem);
router.put('/:collectionName/:itemId/edit-item', itemsController.editItem);
router.delete('/:collectionName/:itemId', itemsController.deleteItem);
router.post('/:collectionName/:itemId/like', itemsController.likeItem);

module.exports = router;