const jwt=require("jsonwebtoken");
require("dotenv").config();
const Speaker = require("./../Models/speakerModel");
const Student = require("./../Models/studentModel");




exports.loginAuth = (request,response,next) => {
    let token;

    //Static admin
    if(request.body.email=="Ahmed" && request.body.password=='az6199')
    {
        token=jwt.sign({role:"admin", email:"Ahmed"},
        process.env.SECRET_KEY,{expiresIn:"10h"});
        response.json({message:"logged in as an admin",token});
    }

    else
     {
        Speaker.find({email:request.body.email , password:request.body.password})
         .then( (data)=>
            {
                if (data==null) 
                {   
                    Student.find({email:request.body.email , password:request.body.password})
                        .then( (data)=>{

                                if (data==null) {next("Not Registered")};

                                token = jwt.sign({role:"student" , email:data.email , password:data.password},
                                process.env.SECRET_KEY,{expiresIn:"10h"})
                                response.json({message:"logged in student",token})
                           })
                }
     
        token = jwt.sign({role:"speaker" , email:data.email , password:data.password},
        process.env.SECRET_KEY,{expiresIn:"10h"})
        response.json({message:"logged in speaker",token})
         })
    .catch(error=>{next(error)})
 }
}

exports.registerationStudent = (request,response) => {
     console.log(request.body);
     response.json(request.body);}
    
    
 exports.registerationSpeaker = (request,response) => {
    console.log(request.body);
    response.json(request.body);
}


















// exports.loginAuth = (request,response) => {
//     console.log("Logging in");
//     console.log(request.body);
//     response.json(request.body);}


// exports.registerationStudent = (request,response) => {
//     console.log(request.body);
//     response.json(request.body);}
    
    
// exports.registerationSpeaker = (request,response) => {
//     console.log(request.body);
//     response.json(request.body);}