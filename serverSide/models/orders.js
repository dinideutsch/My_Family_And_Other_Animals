var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var orders = new Schema(
    {
        cart:{type: Array}
    }
);

module.exports = mongoose.model('orders', orders);