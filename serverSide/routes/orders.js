var express = require('express');
var router = express.Router();
var orderController = require('../controllers/orderController')

router.get('/getAll', orderController.getAll);

router.post('/createOrder', orderController.createOrder);

module.exports = router;