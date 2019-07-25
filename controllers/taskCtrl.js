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
   db.Task.findOne({ _id: req.params.task_id }, (error, foundTask) => {
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
      db.List.findOne({ _id: listId }, (error, foundList) => {
      if (error) return response.sendErrorResponse(res, error);
        foundList.tasks.forEach(task => {
          if (task !== null) {
            if (task._id == taskId) {
              task.task = req.body.task;
              foundList.save();
              response.sendResponse(res, foundList);
            }
          }
          
        })
      })
  },
  deleteTask: (req, res) => {
    let taskId = req.params.task_id;
    let listId = req.params.id
      db.List.findOne({ _id: listId }, (error, foundList) => {
        if (error) return response.sendErrorResponse(res, error);
          foundList.tasks.forEach((task,i) => {
            console.log(task)
            if (task !== null) {
              if (task._id == taskId) {
                console.log("This is the one to delete",task)
                foundList.tasks.splice(i,1);
                foundList.save()
                response.sendResponse(res, foundList);
              }
            }
          })
      })
  }
}