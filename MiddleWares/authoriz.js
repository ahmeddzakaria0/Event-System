const jwt=require("jsonwebtoken");

module.exports=(request,response,next)=>{
    let token,decodedToken;
    try{
             token =  request.get("Authorization").split(" ")[1];
            decodedToken=jwt.verify(token,"**Az01002354503Az**ThisIsSecretKey**");
    }catch(error)
    {
        let errorObject=new Error("Not Athenticated");
        errorObject.status=403;// check 
        next(errorObject);
    }


        //handel passing
    request.role=decodedToken.role
    request.id=decodedToken.id
    next();


}