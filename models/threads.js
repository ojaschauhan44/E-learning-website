var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ThreadSchema = new Schema({
  unique_id:{
    type:Number,
    required:true
  },
  name:{
    type: String,
    required:true
 },
   email:{
     type: String,
     required:true
 },
 created_on:{
   type:Date,
   default:Date.now
 },
});

Detail = mongoose.model('Detail', ThreadSchema);

module.exports = Detail;
