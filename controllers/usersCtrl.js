const db = require('../models');
const response = require('./response');


module.exports = {
  index: (req, res) => {
    db.User.find({})
    .populate('lists')
    .exec((error, foundUsers) => {
      if (error) return response.sendErrorResponse(res, error);
      response.resultAll(res, foundUsers);
    })
  },
  show: (req, res) => {
    db.User.findById(req.session.currentUser._id)
    .populate('lists')
    .exec((error, foundUser) => {
      if (error) return response.sendErrorResponse(res, error);
      response.sendResponse(res, foundUser);
    })
  },
  create: (req, res) => {
    db.User.create(req.body, (error, createdUser) => {
      if (error) return response.sendErrorResponse(res, error);
      response.sendResponse(res, createdUser);
    })
  },
  update: (req, res) => {
    db.User.findByIdAndUpdate(req.params.id, req.body, { new: true }, (error, updatedUser) => {
      if (error) return response.sendErrorResponse(res, error);
      response.sendResponse(res, updatedUser);
    })
  }, 
  delete: (req, res) => {
    db.User.findByIdAndDelete(req.params.id, (error, deletedUser) => {
      if (error) return response.sendErrorResponse(res, error);
      response.sendResponse(res, deletedUser);
      console.log(deletedUser);
    })
  }
}