const db = require('../models');
const response = require('./response');

module.exports = {
  indexOfItems: (req, res) => {
    db.Item.find({}, (error, foundItems) =>{
      if (error) return response.sendErrorResponse(res, error);
      response.resultAll(res, foundItems);
    })
  },
  createItems: (req, res) => {
    let user = req.session.currentUser;
    console.log(user);
    db.Item.create(req.body, (error, createdItem) =>{
      if (error) return response.sendErrorResponse(res, error);
      response.sendResponse(res, createdItem);
      console.log(createdList);
    })
  }
}