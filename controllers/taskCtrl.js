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
    console.log(req.params.task_id);
   db.Task.findOne({ _id: req.params.task_id }, (error, foundTask) => {
    console.log(foundTask);
     if (error) return response.sendErrorResponse(res, error);
     response.sendResponse(res, foundTask);
   })
  },
  createTask: (req, res) => {
    let listId = req.params.id
    db.Task.create(req.body, (error, createdTask) =>{
      if (error) return response.sendErrorResponse(res, error);
      db.List.findOne({_id:listId}, (error, foundList) =>{
        if (error) return response.sendErrorResponse(res,error);
        foundList.tasks.push(createdTask)
        foundList.save()
        response.sendResponse(res, foundList);
      })
    })
  },
  updateTask: (req, res) => {
    let taskId = req.params.task_id;
    let listId = req.params.id;
    db.Task.findOneAndUpdate({ _id: taskId }, req.body, { new: true}, (error, updatedTask) => {
      console.log(updatedTask);
      if (error) return response.sendErrorResponse(res, error);
      db.List.findOne({ _id: listId }, (error, foundList) => {
        if (error) return response.sendErrorResponse(res, error);
        db.Task.findOne({ _id: taskId }, (error, foundTask) => {
          if (error) return response.sendErrorResponse(res, error);
          foundList.tasks.pop(foundTask);
          foundList.tasks.push(updatedTask);
          foundList.save();
          response.sendResponse(res, foundList);
        })
      })  // look thru an object and iterate thru array 
    })
  },
  deleteTask: (req, res) => {
    let taskId = req.params.task_id;
    let listId = req.params.id
    db.Task.findOneAndDelete({ _id: taskId }, (error, deletedTask) => {
      if (error) return response.sendErrorResponse(res, error);
      db.List.findOne({ _id: listId }, (error, foundList) => {
        if (error) return response.sendErrorResponse(res, error);
        db.Task.findOne({ _id: taskId }, (error, foundTask) => {
          if (error) return response.sendErrorResponse(res, error);
        })
        foundList.tasks.pop(deletedTask);
        foundList.save();
        response.sendResponse(res, foundList);
      })
    })
  }
}