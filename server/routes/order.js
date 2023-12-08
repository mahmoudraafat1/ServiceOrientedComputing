const orderController = require('../controllers/order.controller');

const router = require('express').Router();

router.post('/add', orderController.addOrder);
router.get('/', orderController.getAllOrders);
router.get('/:id', orderController.getOrderById);
router.patch('/update/:id', orderController.updateOrderById);
router.delete('/delete/:id', orderController.deleteOrderById);

module.exports = router;
