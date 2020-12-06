const mongo = require('mongoose');

const Schema = mongo.Schema;


const offerSchema = mongo.Schema({
    name : {
        type : String,
        required : true
    },
     

});

module.exports = mongo.model('offer',offerSchema);