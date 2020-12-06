const mongo = require('mongoose');

const Schema = mongo.Schema;


const privateProductSchema = new Schema({
      name : {
          type: String,
          required: true
      },
      price : {
          type:Number,
          required:true
      },
      discription: {
          type:String,
          required:true
      },
      number : {
            type:Number,
            required:true
      }

});

module.exports = mongo.model('privateProduct',privateProductSchema);