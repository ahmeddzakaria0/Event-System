///**getting model**/
const Speaker = require("./../Models/speakerModel.js")
const {validationResult}=require("express-validator")



exports.getSpeaker = (request,response,next) => {
   /* console.log("Getting Speaker");
    console.log(request.body);
    response.json(request.body)*/
    Speaker.find({})
        .then( (data) => {response.json({message:"Speakers : ",data})} )
        .catch( (error) => {next(error)} )};



    
exports.getSpeaker_id = (request,response,next) => {
     /*console.log("Logging in");
     console.log(request.body);
     response.json(request.body)*/
     
     Speaker.find({_id : request.params.id})
        .then( (data) => {response.json({message:"Speakers : ",data})} )
        .catch( (error) => {next(error)} )
     
    };

exports.addSpeaker = (request,response,next) => {
     /*console.log("Logging in");
     console.log(request.body);
     response.json(request.body)*/
     
    let result = validationResult(request)
    if( !result.isEmpty() )
    {
        let message= result.array().reduce((sum,error)=>sum+error.msg+" ","")
             let errorObj=new Error(message);
             throw errorObj;
    }

     let speakerObj = new Speaker  
     ({
        _id       : request.body.id , 
        speakerName  : request.body.speakerName , 
        eventHost : request.body.eventHost  , 
        adminName : request.body.adminName ,
        phoneNum  : request.body.phoneNum ,
        password  : request.body.password 
   })
        speakerObj.save()
            .then( (data) => {response.json({message:"Speakers added : ",data})} )
            .catch( (error) => {next(error)} )
     
     };    
    
exports.updateSpeaker = (request,response,next) => {
    let result = validationResult(request)
    if( !result.isEmpty() )
    {
        let message= result.array().reduce((sum,error)=>sum+error.msg+" ","")
             let errorObj=new Error(message);
             throw errorObj;
    }
    Speaker.updateOne ( {_id:request.body.id} , 
                                    {$set:
                                  { speakerName:request.body.speakerName , 
                                    event:request.body.eventHost ,
                                    phoneNum:request.body.phoneNum,
                                    adminName:request.body.adminName } } )

    .then( (data) => {
        if(data.modifiedCount==0) throw new Error("Department is not Found");
        else if (data.statusCode == 400) throw new Error("Department is not Found");
        response.json({message:"Speakers updated : ",data})
        
    })
    .catch( (error) => {next(error)} )
    };

exports.deleteSpeaker = (request,response) => {
    console.log("Logging in");
    console.log(request.body);
    response.json(request.body);}