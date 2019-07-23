// const db = require('../models');
// const response = require('./response');


// module.exports = {
//   index: (req, res) => {
//     db.User.find({}, (error, foundUsers) => {
//       if (error) return response.sendErrorResponse(res, error);
//       response.sendResponse(res, foundUsers);
//     })
//   },
//   show: (req, res) => {
//     db.User.findOne({ name: req.params.name }, (error, foundUser) => {
//       if (error) return response.sendErrorResponse(res, error);
//       response.sendResponse(res, foundUser);
//     })
//   },
//   create: (req, res) => {
//     db.User.create(req.body, (error, createdUser) => {
//       if (error) return response.sendErrorResponse(res, error);
//       response.sendResponse(res, createdUser);
//     })
//   },
//   update: (req, res) => {
//     db.User.findOneAndUpdate(req.params.name, req.body, { new: true }, (error, updatedUser) => {
//       if (error) return response.sendErrorResponse(res, error);
//       response.sendResponse(res, updatedUser);
//     })
//   }, 
//   delete: (req, res) => {
//     db.User.findByIdAndDelete(req.body._id, (error, deletedUser) => {
//       if (error) return response.sendErrorResponse(res, error);
//       response.sendResponse(res, deletedUser);
//       console.log(deletedUser);
//     })
//   }
// }