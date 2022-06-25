const mongoose = require("mongoose");
//const autoIncrement = require('mongoose-sequence')(mongoose);


speakerSchema = new mongoose.Schema({
    _id : Number ,
    speakerName : {type:String , required:true},
    email : String ,
    password : {type:String , required:true} ,
    phoneNum : Number 
}  , { _id: false } );



//** Modeling **/
//speakerSchema.plugin(autoIncrement); //incrementd field is _id by default
module.exports = mongoose.model("speakers",speakerSchema);
