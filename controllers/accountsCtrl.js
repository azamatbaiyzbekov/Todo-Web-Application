const db = require('../models');
const response = require('./response');

module.exports = {
  index: (req, res) => {
    db.User.find({}, (error, foundUsers) => {
      if (error) return response.sendErrorResponse(res, error);
      response.sendResponse(res, foundUsers);
  })
},
  create: (req, res) => {
    db.User.create(req.body, (error, createdUser) => {
      if (error) return response.sendErrorResponse(res, error);
      response.sendResponse(res, createdUser);
      console.log(createdUser);
    })
  },
}