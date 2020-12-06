const mongo = require('mongoose');

const Schema = mongo.Schema;

const gallerySchema = new Schema({
    name: {
        type : String,
        required:true
    },
    imgURL :{
        type : String,
        required: true
    }



});

module.exports = mongo.model("gallery",gallerySchema);
 
