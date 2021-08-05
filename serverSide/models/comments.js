var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var comments = new Schema(
    {
        name: {type: String},
        email: {type: String},
        subject: {type: String},
        content: {type: String}
    }
);

module.exports = mongoose.model('comments', comments);
