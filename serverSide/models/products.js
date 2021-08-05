var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var products = new Schema(
    {
    
        id: { type: Number },
        title: { type: String}, 
        img: { type: String },
        info: { type: String },
        inCart: { type: Boolean },
        price: { type: Number },
        count: { type: Number},
        total:{type: Number},
        stock:{type: Number},
        code:{type: Number}
    }
);

module.exports = mongoose.model('products', products);



