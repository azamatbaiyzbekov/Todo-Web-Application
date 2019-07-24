const db = require('../models');
const response = require('./response');

module.exports = {
  indexOfTasks: (req, res) => {
    db.Task.find({}, (error, foundTasks) =>{
      if (error) return response.sendErrorResponse(res, error);
      response.resultAll(res, foundTasks);
    })
  },
  createTask: (req, res) => {
    let user = req.session.currentUser;
    console.log(user);
    db.Task.create(req.body, (error, createdTask) =>{
      if (error) return response.sendErrorResponse(res, error);
      response.sendResponse(res, createdTask);
      console.log(createdTask);
    })
  }
}