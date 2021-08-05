var Order = require('../models/orders')

//return all the orders
exports.getAll = function(req, res, next){
    Order.find()
    .exec(function(err, list){
        if(err) return next(err);
        res.send(list);
        console.log(list);
    })
}

//creates a new order
exports.createOrder = function(req, res, next){
    var order = new Order({
        cart: req.body
    });
    order.save(function (err){
        if(err) return next(err);
        res.send(order);
    })
}
