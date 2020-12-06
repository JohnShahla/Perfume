const mongo = require('mongoose');

const Schema = mongo.Schema;


const orderSchema = mongo.Schema({
    name : {
        type : String,
        required: true
    },
    country : {
        type : String,
        required : true
    },
    prvince : {
        type : String,
        required : true
    },
    zip : {
        type : Number,
        required : true
    },
    additionalInfo : {
        type : String,
        required : true
    },
    phoneNumder : {
        type : String,
        required : true
    }


});



module.exports = mongo.model('order',orderSchema);