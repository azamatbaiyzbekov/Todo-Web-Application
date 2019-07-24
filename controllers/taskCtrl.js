const db = require('../models');
const response = require('./response');

module.exports = {
  indexOfTasks: (req, res) => {
    db.Task.find({}, (error, foundTasks) =>{
      if (error) return response.sendErrorResponse(res, error);
      response.resultAll(res, foundTasks);
    })
  },
  showTask: (req, res) => {
   db.Task.FindById(req.params.id, (error, foundTask) => {
     if (error) return response.sendErrorResponse(res, error);
     response.sendResponse(error, foundTask);
   })
  },
  createTask: (req, res) => {
    let listId = req.params.id
    console.log(listId);
    db.Task.create(req.body, (error, createdTask) =>{
      if (error) return response.sendErrorResponse(res, error);
      db.List.findOne({_id:listId}, (error, foundList) =>{
        if (error) return response.sendErrorResponse(res,error);
        foundList.tasks.push(createdTask)
        foundList.save()
        response.sendResponse(res, foundList)
      })
    })
  }
}