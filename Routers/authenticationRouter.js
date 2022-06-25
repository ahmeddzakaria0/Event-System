const express = require('express');
const router  = express.Router();

const controller = require ("./../Controllers/authenticationController");




router.post("/login" , controller.loginAuth)  //Checking username and password 


router.post("/registerStudent" , controller.registerationStudent)  //RegisterStudent


router.post ("/registerSpeaker" , controller.registerationSpeaker)  //RegisterSpeaker


module.exports=router;