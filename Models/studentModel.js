const mongoose = require("mongoose");
//const autoIncrement = require('mongoose-sequence')(mongoose);


studentSchema = new mongoose.Schema({
    _id : Number ,
    studentName : {type:String , required:true},
    email : String ,
    password : {type:String , required:true} ,
    phoneNum : Number 
}  , { _id: false } );


//** Modeling **/
//studentSchema.plugin(autoIncrement); //incrementd field is _id by default
module.exports = mongoose.model("students",studentSchema);
