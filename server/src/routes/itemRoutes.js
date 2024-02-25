const router = require('express').Router();

const itemsController = require('../controllers/itemsController');
const verifyJWT = require('../middlewares/verifyJWT');

router.get('/my-items', verifyJWT, itemsController.getMyItems);
router.post('/add-item', verifyJWT, itemsController.createItem);
router.put('/:collectionName/:itemId/edit-item', verifyJWT, itemsController.editItem);
router.delete('/:collectionName/:itemId', verifyJWT, itemsController.deleteItem);
router.post('/:collectionName/:itemId/like', verifyJWT, itemsController.likeItem);
router.get('/:collectionName', itemsController.getAllItemsFromCollection);
router.get('/:collectionName/:itemId/details', itemsController.getItemById);

module.exports = router;