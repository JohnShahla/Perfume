const mongo = require('mongoose');

const Schema = mongo.Schema;


const adminSchema = new Schema({
    userName : {
        type : String,
        required: true
    },
    pass : {
        type:String,
        required: true
    }



});

module.exports = mongo.model('admin',adminSchema);
