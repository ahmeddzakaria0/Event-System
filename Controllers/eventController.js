const { validationResult } = require("express-validator");

const Event = require("./../Models/eventModel");



exports.getEvent = (request,response) => 
{
    Event.find({})
        .then(data => {
            response.json(data)
            console.log("EVENTSSSS")
        })
        .catch(error => {
            next(error);
        })
}

    
exports.getEvent_id = (request,response) => 
{
    Event.find({ _id: request.params.id })
    .then(data => {
        response.json(data)
        console.log("EVENTSSSS_ID")
    })
    .catch(error => {
        next(error);
    })
}

exports.addEvent = (request,response) => 
{
    let result = validationResult(request);
    if (!result.isEmpty()) {
        let error = new Error();
        error.status = 422;
        error.message = result.array().reduce((current, object) => current + object.msg + " ", "")
        throw error;
    }

   // if (request.role == "admin") {
        let eventObj = new Event({
            _id: request.body.id,
            title: request.body.title,
            date: request.body.date,
            mainspeaker: request.body.mainSpeaker,
            speakers: request.body.speakers,
            students: request.body.students
        })

        eventObj.save()
            .then(data => {
                response.status(201).json({ message: "Event added", data })
            })
            .catch(error => next(error))
  //  }
  //  else {
    //    throw new Error("Not Authorized. Only Admin can do that");
 //   }

}    
    

exports.updateEvent = (request,response) => {
    console.log("Logging in");
    console.log(request.body);
    response.json(request.body);
}

exports.deleteEvent = (request,response) => 
{
    console.log("Logging in");
    console.log(request.body);
    response.json(request.body);
}