const express = require('express');
const {body,param,query}=require("express-validator")
const router  = express.Router();

const controller = require ("./../Controllers/speakerController");


router.get("/speaker" , controller.getSpeaker);

router.get("/speaker/:id?", controller.getSpeaker_id);

router.post("/speaker" ,
 body("id").isInt().withMessage("Speaker id must be integer"),

 controller.addSpeaker);

router.put("/speaker" ,
body("speakerName").isAlpha().withMessage("Speaker name must be charachters"),
body("phoneNum").isInt().withMessage("Phone number must be only numbers")
.isLength({max:11}).withMessage("Phone number is incorrect") ,
controller.updateSpeaker);

router.delete("/speaker" , controller.deleteSpeaker);


module.exports=router;