const express = require('express');
const router  = express.Router();
const {body,param,query}=require("express-validator")

const controller = require ("./../Controllers/studentController");


router.get("/student" , controller.getStudent);

router.get("/student/:id?" , controller.getStudent_id);

router.post("/student" ,
body("id").isInt().withMessage("Student id must be integer"),
controller.addStudent);

router.put("/student" ,
body("studentName").isAlpha().withMessage("Student name must be charachters"),
body("phoneNum").isInt().withMessage("Phone number must be only numbers")
.isLength({max:11}).withMessage("Phone number is incorrect") ,
controller.updateStudent);

router.delete("/student" , controller.deleteStudent);


module.exports=router;