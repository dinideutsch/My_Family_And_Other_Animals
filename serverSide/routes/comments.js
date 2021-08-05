var express = require('express');
var router = express.Router();
var commentController = require('../controllers/commentController');
const checkAuth = require('../middlewares/checkAuth');

router.get('/getAll',checkAuth, commentController.getAll);

router.post('/email', commentController.email);

router.post('/createComment', commentController.createComment);



module.exports = router;
