const db = require('../models');
const response = require('./response');

module.exports = {
  newList: (req, res) => {
    db.User.find({}, (error, foundLists) =>{
      if (error) return response.sendErrorResponse(res, error);
      response.resultAll(res, foundLists);
    })
  },
  createList: (req, res) => {
    db.User.create(req.body, (error, createdList) =>{
      if (error) return response.sendErrorResponse(res, error);
      response.sendResponse(res, createdList);
      console.log(createdList);
    })
  }
}