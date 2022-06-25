//NPM Packages
//const { request, response } = require('express');
require("dotenv").config();
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');


//////////////////////////////
const app = express();
//////////////////////////////
const authentication = require ("./Routers/authenticationRouter");
const speaker = require ("./Routers/speakerRouter");
const student = require("./Routers/studentRouter");
const event = require ("./Routers/eventRouter");
//////////////////////////////



mongoose.connect(process.env.DB_URL)
        .then(()=>{
            console.log("Connected to Event System.....");
            app.listen (process.env.PORT_NUMBER , ()=>{console.log("Hello I'm Listening...")})//end of app 
            ;})//end of then
        .catch(error=>{
            console.log(" ITIEvents is OFF ..."+error)   })//end of catch


//////////////////////////////
//First MW
app.use(morgan(':method :url'));
//////////////////////////////



// app.use(()=>{
//     console.log("MW");
// })

//////////////////////////////
//Routers
app.use(bodyParser.json());//json
app.use(bodyParser.urlencoded({extended:false}));//form

app.use(authentication);
app.use(speaker);
app.use(student);
app.use(event);
//////////////////////////////



//////////////////////////////
//Not Found MW
app.use ((request , response , next) => {response.status(404).send("Page Is Not Found")});

//Error MW
app.use ((error,request , response , next) => {response.status(500).send(error)});  
//////////////////////////////
