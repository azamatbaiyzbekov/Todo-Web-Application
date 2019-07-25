const db = require('../models');
const response = require('./response');

module.exports = {
  indexOfLists: (req, res) => {
    db.List.find({}, (error, foundLists) =>{
      if (error) return response.sendErrorResponse(res, error);
      response.resultAll(res, foundLists);
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

}
