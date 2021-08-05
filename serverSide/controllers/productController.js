var Product = require('../models/products');

//returns all the priducts
exports.getAll = function(req, res, next){
    Product.find()
    .exec(function(err, list){
        if(err) return next(err);
        res.send(list);
        console.log(list)
    })
}
//uodates the products database
exports.putAll = function(req, res, next){
    const pets = req.body;
    pets.forEach(element => {
        console.log(element._id);
        Product.findByIdAndUpdate(element._id,element)
        .exec(function(err,res){
        console.log(res,err);
    })
 })
}

//creates a new product
exports.createProduct = function(req, res, next){
    var product = new Product( {
        id: req.body.id, 
        title: req.body.title, 
        img: req.body.image,
        info: req.body.info,
        inCart: false,
        price: req.body.price,
        count: 0,
        total: 0,
        stock: req.body.stock,
        code: req.body.code
    });
    product.save(function (err){
        if(err) return next(err);
        res.send(product);
    })
}

//deletes a product
exports.deleteProduct = function(req, res, next){
    Product.findByIdAndDelete(req.body.id, function(err){
        if(err) return next(err);
        res.send();
    })
 }

