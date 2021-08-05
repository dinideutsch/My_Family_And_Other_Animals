var express = require('express');
var router = express.Router();
var productController = require('../controllers/productController')
const checkAuth = require('../middlewares/checkAuth');


router.get('/getAll', productController.getAll);

router.post('/createProduct',checkAuth, productController.createProduct);

router.put('/putAll', productController.putAll);

router.delete('/deleteProduct',checkAuth, productController.deleteProduct);



module.exports = router;