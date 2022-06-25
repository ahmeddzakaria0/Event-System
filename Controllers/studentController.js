// exports.getStudent = (request,response) => {
//     console.log("Getting Speaker");
//     console.log(request.body);
//     response.json(request.body);}

    
// exports.getStudent_id = (request,response) => {
//      console.log("Logging in");
//      console.log(request.body);
//      response.json(request.body);}

// exports.addStudent = (request,response) => {
//      console.log("Logging in");
//      console.log(request.body);
//      response.json(request.body);}    
    
// exports.updateStudent = (request,response) => {
//     console.log("Logging in");
//     console.log(request.body);
//     response.json(request.body);}

// exports.deleteStudent = (request,response) => {
//     console.log("Logging in");
//     console.log(request.body);
//     response.json(request.body);}




///**getting model**/
        /*
         |
         |
         |
         */
const Student = require("./../Models/studentModel.js")
const {validationResult}=require("express-validator")

exports.getStudent = (request,response,next) => {
   /* console.log("Getting Student");
    console.log(request.body);
    response.json(request.body)*/
    Student.find({})
        .then( (data) => {response.json({message:"Students : ",data})} )
        .catch( (error) => {next(error)} )};



    
exports.getStudent_id = (request,response,next) => {
     /*console.log("Logging in");
     console.log(request.body);
     response.json(request.body)*/
     
     Student.find({_id : request.params.id})
        .then( (data) => {response.json({message:"Students : ",data})} )
        .catch( (error) => {next(error)} )
     
    };

exports.addStudent = (request,response,next) => {
     console.log("Logging in");
     /*console.log(request.body);
     response.json(request.body)*/
     
     let result = validationResult(request)
      if( !result.isEmpty() )
      {
          console.log("error")
          let message= result.array().reduce((sum,error)=>sum+error.msg+" "," ")
               let errorObj=new Error(message);
               throw errorObj;
      }

    
     let studentObj = new Student 
     ({
         _id       : request.body.id , 
         studentName  : request.body.studentName , 
         eventHost : request.body.eventHost  , 
         phoneNum  : request.body.phoneNum ,
         password  : request.body.password 
    })
    console.log(studentObj);
        studentObj.save()
            .then ( (data)  => {response.json({message:"Students added :",data})})
            .catch( (error) => {next(error)} )
     
     };    

    
exports.updateStudent = (request,response,next) => {
    /*console.log("Logging in");
    console.log(request.body);
    response.json(request.body)*/

    let result = validationResult(request)
    if(result.isEmpty == false)
    {
        let message= result.array().reduce((sum,error)=>sum+error.msg+" ","")
             let errorObj=new Error(message);
             throw errorObj;
    }

    Student.updateOne ( {_id:request.body.id} , {$set:{studentName:request.body.studentName , 
                                    event:request.body.eventHost ,
                                    phoneNum:request.body.phoneNum}})

    .then( (data) => {
     if(data.modifiedCount==0) throw new Error("Department is not Found");
        response.json({message:"Students updated : ",data})
    })
    .catch( (error) => {next(error)} )
    };

exports.deleteStudent = (request,response) => {
    console.log("Logging in");
    console.log(request.body);
    response.json(request.body);}