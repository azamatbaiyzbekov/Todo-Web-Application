const db = require('../models');
const response = require('./response');

module.exports = {
  indexOfLists: (req, res) => {
    db.List.find({}, (error, foundLists) => {
      if (error) return response.sendErrorResponse(res, error);
      response.resultAll(res, foundLists);
    })
  },
  showList: (req, res) => {
    db.List.findById(req.params.id, (error, foundList) => {
      if (error) return response.sendErrorResponse(res, error);
      response.sendResponse(res, foundList);
    })
  },
  createList: (req, res) => {
    let user = req.session.currentUser;
    db.List.create(req.body, (error, createdList) =>{
      if (error) return response.sendErrorResponse(res, error);
      db.User.findOne({_id:user}, (error, foundUser) => {
        if (error) return response.sendErrorResponse(res, error);
        foundUser.lists.push(createdList._id)
        foundUser.save()
        response.sendResponse(res, foundUser);
        console.log(createdList);
      })
    })
  },
  updateList: (req, res) => {
    db.List.findByIdAndUpdate(eeq.params.id, req.body, { updated: true }, (error, updatedList) => {
      if (error) return response.sendErrorResponse(res, error);
      response.sendResponse(res, updateList);
    })
  }
}