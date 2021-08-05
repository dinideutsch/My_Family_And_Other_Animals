var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var admins = new Schema(
    {
        name: {type: String},
        password: {type: String}
    }
);

module.exports = mongoose.model('admins', admins);