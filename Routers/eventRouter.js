const express = require('express');
const router  = express.Router();
const {body,param,query}=require("express-validator")
const controller = require ("./../Controllers/eventController");


router.get("/event" , controller.getEvent);

router.get("/event/:id?" , controller.getEvent_id);




router.post("/event" , 
[body("title").isString().withMessage("Title should be a string"),
body("date").isDate({format: 'DD-MM-YYYY'}).withMessage("eventDate should be a Date")]
 ,  controller.addEvent);




router.put("/event" , controller.updateEvent);

router.delete("/event" , controller.deleteEvent);


module.exports=router;