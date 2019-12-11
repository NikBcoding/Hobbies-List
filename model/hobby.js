var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var hobbySchema = new Schema ({
    
    name: String,
    detail: String
})
module.exports = mongoose.model('Hobby',hobbySchema)