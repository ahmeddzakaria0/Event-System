























const jwt=require("jsonwebtoken");
const Speaker = require("./../Models/speakerModel.js");
const Student = require("./../Models/studentModel.js");


exports.loginAuth = (request,response,next) => 
{
    let token;
    
    Speaker.find({adminName:request.body.adminName , password:request.body.password})
              .then( (data) => 
    {
                    if ((data)==null) 
                    { //no admin finding speaker

                        Speaker.find({speakerName:request.body.speakerName , password:request.body.password})
                        .then( (data) =>
                           {
                               if ((data)==null) 
                               { //no speaker finding student  

                                   Student.find({studentName:request.body.studentName , password:request.body.password})
                                       .then( (data) =>{

                                              if ((data)==null) {next("Something went wrong")};
                                              console.log("student")
                                              token = jwt.sign({role:"Student" , studentName:data.studentName , password:data.password},
                                              "**Az01002354503Az**ThisIsSecretKey**",{expiresIn:"5m"})
                                              response.json({message:"logged in student",token})
                                          })//end of student login
                               }
                            console.log("speaker")   
                            token = jwt.sign({role:"Speaker" , speakerName:data.speakerName , password:data.password},
                            "**Az01002354503Az**ThisIsSecretKey**",{expiresIn:"5m"})
                            response.json({message:"logged in speaker",token})                              
                             })//end of speaker login
                   }

                   token = jwt.sign({role:"Admin" , adminName:data.adminName , password:data.password},
                   "**Az01002354503Az**ThisIsSecretKey**",{expiresIn:"5m"})
                   response.json({message:"logged in as an admin",token})
                   console.log("EH DAAAH");
                   console.log(data);
                                                                
     })//end of admin login
     
    .catch(error=>{next(error)})
 }
















exports.registerationStudent = (request,response) => {


  
    
    }
    
    
 exports.registerationSpeaker = (request,response) => {
    console.log(request.body);
    response.json(request.body);
}




  //Static admin
    // if(request.body.userName=="Ahmed" && request.body.password==6199)
    // {
    //     token=jwt.sign({role:"admin", userName:"Ahmed"},
    //                     "**Az01002354503Az**ThisIsSecretKey**",{expiresIn:"5m"});
    //     response.json({message:"logged in as an admin",token});
    // }


    







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


