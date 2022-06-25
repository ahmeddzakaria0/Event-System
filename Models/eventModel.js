const mongoose = require("mongoose");
//const autoIncrement = require('mongoose-sequence')(mongoose);



const eventSchema = new mongoose.Schema({

    _id: Number,
    title: String,
    date: String,
    mainspeaker: {type: mongoose.Types.ObjectId,ref: "speakers"},
    speakers: [{ type: mongoose.Types.ObjectId, ref: "speakers" }],
    students: [{ type: Number, ref: "students" }]
}  , { _id: false } )


//eventSchema.plugin(autoIncrement); //incrementd field is _id by default
module.exports = mongoose.model("events", eventSchema);
