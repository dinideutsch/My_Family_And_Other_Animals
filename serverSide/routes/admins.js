var express = require('express');
var router = express.Router();
var adminController = require('../controllers/adminController');
const checkAuth = require('../middlewares/checkAuth')

router.get('/getAll', adminController.getAll);

router.post('/login',adminController.login);

router.post('/createAdmin',checkAuth, adminController.createAdmin);


module.exports=router